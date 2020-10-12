FROM nginx:1.19-alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY ./build  /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
