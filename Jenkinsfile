pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
        disableConcurrentBuilds()
    }

    parameters {
        string(name: 'DEPLOY_URL', defaultValue: 'blog.d3h1.com', description: 'Public hostname used while building metadata')
        string(name: 'HOST_PORT', defaultValue: '3000', description: 'Loopback port exposed to the reverse proxy')
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
                branch 'develop'
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
        }
    }
}
