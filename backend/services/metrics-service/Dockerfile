FROM node:12.19.0 as base

FROM base as builder

WORKDIR /usr/src/app
COPY package.json .
RUN npm install --production
COPY . .
RUN npm run build


FROM base as final

WORKDIR /usr/src/app
COPY package.json .
COPY entrypoint.sh .
COPY ormconfig.js .
COPY --from=builder /usr/src/app/dist /usr/src/app/dist
COPY --from=builder /usr/src/app/node_modules /usr/src/app/node_modules

CMD [ "/bin/bash", "./entrypoint.sh"]
EXPOSE 5001
