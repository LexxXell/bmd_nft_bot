ARG REDIS_IMAGE_VERSION=6.2-alpine
FROM redis:$REDIS_IMAGE_VERSION

LABEL maintainer="lexxxell007@gmail.com"

RUN apk update && apk --no-cache add tini

COPY ./redis.conf /usr/local/etc/redis/redis.conf
COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/sbin/tini", "--", "/entrypoint.sh"]