FROM node:16.13.1-alpine

EXPOSE 3000
ENV HOST 0.0.0.0

RUN apk update && \
    apk add git && \
    apk add yarn && \
    npm install -g @vue/cli nuxt create-nuxt-app