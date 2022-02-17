import telebot
from telebot import types

from settings import (
    bot_token,
)

bot = telebot.TeleBot(token=bot_token, threaded=False)


@bot.message_handler(commands=['start'])
def start(message):
    bot.send_message(message.chat.id, 'Hi')
