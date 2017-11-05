import TelegramBot from 'node-telegram-bot-api'

const bot = new TelegramBot(TOKEN, {webHook: {port: 8000, host: 'localhost'}});
bot.setWebHook(DOMAIN+TOKEN);

bot.on('message', msg => {
       bot.sendMessage(msg.chat.id, 'Asalamualaikum');
});