#!/bin/sh

exec $@
echo "[INFO] Server launch"
redis-server /usr/local/etc/redis/redis.conf