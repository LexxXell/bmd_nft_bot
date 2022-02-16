ARG NGINX_IMAGE_VERSION=1.19-alpine
FROM nginx:$NGINX_IMAGE_VERSION

LABEL maintainer="lexxxell007@gmail.com"

RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d
