FROM node:12.19.0-alpine as base

FROM base as builder

WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json package-lock.json

RUN npm install --production
RUN npm install postcss-cli
COPY . .
RUN npm run build

CMD ["node", "index"]

EXPOSE 8080
