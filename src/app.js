import TelegramBot from 'node-telegram-bot-api'
import path from 'path';

const TOKEN = '484935789:AAEjnuJwEMC4xDLywoQtUG6yV5x4ogEU1nA',
       DOMAIN = 'https://learnawsnow.com/bot';

const bot = new TelegramBot(TOKEN, {webHook: {port: 8000, host: 'localhost'}});
bot.setWebHook(DOMAIN+TOKEN);

bot.on('message', msg => {
       bot.sendMessage(msg.chat.id, 'Asalamualaikum');
});