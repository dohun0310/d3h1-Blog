pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
        disableConcurrentBuilds()
    }

    parameters {
        string(name: 'DEPLOY_URL', defaultValue: 'blog.d3h1.com', description: 'Public hostname used while building metadata')
        string(name: 'HOST_PORT', defaultValue: '2006', description: 'Loopback port exposed to the reverse proxy')
    }

    environment {
        IMAGE_NAME = 'd3h1-blog'
        CONTAINER_NAME = 'd3h1-blog'
        APP_ENV_CREDENTIALS_ID = 'd3h1-blog-env'
    }

    stages {
        stage('Checkout') {
            steps {
                deleteDir()
                checkout scm
            }
        }

        stage('Verify') {
            steps {
                sh '''
                    set -eu
                    export DEPLOY_URL="${DEPLOY_URL}"
                    corepack yarn install --immutable
                    corepack yarn lint
                    corepack yarn build
                '''
            }
        }

        stage('Build image') {
            steps {
                sh '''
                    set -eu
                    test -n "${DEPLOY_URL}"
                    docker build \
                        --build-arg "DEPLOY_URL=${DEPLOY_URL}" \
                        --tag "${IMAGE_NAME}:${GIT_COMMIT}" \
                        .
                '''
            }
        }

        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                script {
                    lock(resource: 'd3h1-blog-production', inversePrecedence: true) {
                        withCredentials([file(credentialsId: env.APP_ENV_CREDENTIALS_ID, variable: 'APP_ENV_FILE')]) {
                            sh '''
                                set -eu
                                candidate_name="${CONTAINER_NAME}-candidate-${BUILD_TAG}"
                                rollback_name="${CONTAINER_NAME}-rollback-${BUILD_TAG}"

                                RELEASE_IMAGE="${IMAGE_NAME}:${GIT_COMMIT}" \
                                CANDIDATE_NAME="${candidate_name}" \
                                ./scripts/deploy-container.sh smoke

                                RELEASE_IMAGE="${IMAGE_NAME}:${GIT_COMMIT}" \
                                HOST_PORT="${HOST_PORT}" \
                                CONTAINER_NAME="${CONTAINER_NAME}" \
                                ROLLBACK_NAME="${rollback_name}" \
                                ./scripts/deploy-container.sh deploy
                            '''
                        }
                    }
                }
            }
        }
    }

    post {
        always {
            sh 'docker rm -f "${CONTAINER_NAME}-candidate-${BUILD_TAG}" >/dev/null 2>&1 || true'
            script {
                def icon = [
                    SUCCESS: '✅',
                    FAILURE: '❌',
                    ABORTED: '⚠️',
                    UNSTABLE: '⚠️'
                ].get(currentBuild.currentResult, 'ℹ️')

                def message = """${icon} ${env.JOB_NAME} #${env.BUILD_NUMBER}: ${currentBuild.currentResult}
Commit: ${(env.GIT_COMMIT ?: 'unknown').take(7)}
Build: ${env.BUILD_URL}"""

                try {
                    withCredentials([
                        string(credentialsId: 'Telegram-Token', variable: 'TELEGRAM_TOKEN'),
                        string(credentialsId: 'Telegram-ID', variable: 'TELEGRAM_ID')
                    ]) {
                        withEnv(["TELEGRAM_MESSAGE=${message}"]) {
                            def notified = sh(
                                returnStatus: true,
                                script: '''
                                    set +x
                                    curl --silent --show-error --fail --max-time 10 --output /dev/null \
                                        --data-urlencode "chat_id=${TELEGRAM_ID}" \
                                        --data-urlencode "text=${TELEGRAM_MESSAGE}" \
                                        "${TELEGRAM_API_BASE:-https://api.telegram.org}/bot${TELEGRAM_TOKEN}/sendMessage"
                                '''
                            )

                            if (notified != 0) {
                                echo 'Telegram notification failed'
                            }
                        }
                    }
                } catch (Exception error) {
                    echo "Telegram notification unavailable: ${error.class.simpleName}"
                }
            }
        }
    }
}
