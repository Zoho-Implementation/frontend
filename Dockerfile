FROM node:16-alpine

RUN apk update && \
    apk add yarn git

WORKDIR /app
COPY . .

RUN yarn install

RUN yarn serve

EXPOSE 8080

CMD ["yarn", "serve"]
