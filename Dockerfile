# syntax=docker/dockerfile:1

FROM node:22-slim AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
RUN corepack enable && corepack prepare yarn@4.17.0 --activate

FROM base AS dependencies
COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn install --immutable

FROM base AS builder
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
ARG DEPLOY_URL
ENV DEPLOY_URL=${DEPLOY_URL}
RUN yarn build

FROM node:22-slim AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    HOSTNAME=0.0.0.0 \
    PORT=3000

COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

USER node
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD ["node", "-e", "const port=process.env.PORT||3000;fetch(`http://127.0.0.1:${port}/`).then(response=>{if(!response.ok)process.exit(1)}).catch(()=>process.exit(1))"]

CMD ["node", "server.js"]
