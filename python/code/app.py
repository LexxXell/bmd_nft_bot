#!/usr/bin/env python

from flask import Flask, request
import flask

from bot import bot, types

from settings import (
    api_port,
)

app = Flask(__name__)


@app.route("/xell_tests_bot", methods=['POST'])
def bot_webhook():
    if request.headers.get('content-type') != 'application/json':
        flask.abort(403)
    bot.process_new_updates(
        [types.Update.de_json(request.stream.read().decode("utf-8"))])
    return "OK", 200


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=api_port)


# set webhook https://api.telegram.org/bot[token]/setWebhook?url=[ngrok url]/xell_tests_bot
# remove webhook https://api.telegram.org/bot[token]/setWebhook?remove
