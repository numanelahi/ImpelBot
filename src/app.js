import TelegramBot from 'node-telegram-bot-api'

const TOKEN = process.env.TOKEN,
       DOMAIN = process.env.DOMAIN;

const bot = new TelegramBot(TOKEN, {webHook: {port: process.env.PORT, host: process.env.HOST}});
bot.setWebHook(`${DOMAIN}/bot${TOKEN}`);

bot.on('message', msg => {
       bot.sendMessage(msg.chat.id, 'Asalamualaikum');
});