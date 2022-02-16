ARG PYTHON_IMAGE_VERSION=3.9.5-alpine
FROM python:$PYTHON_IMAGE_VERSION

LABEL maintainer="lexxxell007@gamil.com"

ARG USER_NAME=user1
ARG USER_ID=1001
ARG HOME_DIR=/home/app
ARG OS_DEPS

ARG PIPENV_DEV=false
ARG PYTHON_OS_DEPS

ENV APP_HOME=$HOME_DIR
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apk update && apk --no-cache add \
    tini \
    shadow \
    $OS_DEPS \
    $PYTHON_OS_DEPS

RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

COPY ./code/ .
COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

RUN pip install --no-cache --upgrade pip; \
    if $PIPENV_DEV; then PIP_ENV=--dev; fi; \
    if [ -f Pipfile ]; \
    then \
        pip install --no-cache pipfile-requirements && \ 
        pipfile2req $PIP_ENV > requirements.txt; \
    fi; \
    if [ -f requirements.txt ]; \
    then \
        pip install --no-cache -r requirements.txt; \
    fi;

RUN addgroup -S $USER_NAME && adduser -S $USER_NAME -G $USER_NAME; \
    groupmod -g $USER_ID $USER_NAME && usermod -u $USER_ID -g $USER_ID $USER_NAME; \
    chown -R $USER_NAME:$USER_NAME $APP_HOME
USER $USER_NAME

ENTRYPOINT ["/sbin/tini", "--", "/entrypoint.sh"]
