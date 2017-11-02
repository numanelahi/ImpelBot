import TelegramBot from 'node-telegram-bot-api'

const TOKEN = '484935789:AAEjnuJwEMC4xDLywoQtUG6yV5x4ogEU1nA',
       DOMAIN = 'https://leanawsnow.com';

const bot = new TelegramBot(TOKEN, {webHook: {port: 8000, host: 'localhost'}});
bot.setWebHook(`${DOMAIN}/bot${TOKEN}`);

bot.on('message', msg => {
       bot.sendMessage(msg.chat.id, 'Asalamualaikum');
});