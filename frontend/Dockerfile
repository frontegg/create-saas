FROM node:12.19.0-alpine as base

FROM base as builder

WORKDIR /usr/src/app
COPY package.json .
RUN npm install --production
RUN npm install postcss-cli
COPY . .
RUN npm run build


FROM nginx:1.19-alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /usr/src/app/build /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
