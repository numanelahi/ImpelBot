import TelegramBot from 'node-telegram-bot-api'
import fs from 'fs';
import path from 'path';
//import express from 'express';

//const app = express();

const TOKEN = '484935789:AAEjnuJwEMC4xDLywoQtUG6yV5x4ogEU1nA',
       DOMAIN = 'https://learnawsnow.com/bot';

const bot = new TelegramBot(TOKEN, {webHook: {port: 8000, host: 'localhost'}});
console.log(path.join(__dirname, '/certs/crt.pem'));
bot.setWebHook(DOMAIN+TOKEN);

bot.on('message', msg => {
       console.log('This works')
       bot.sendMessage('Asalamualaikum');
});

/*app.post(`/${TOKEN}`, (req, res) => {
       console.log('Message received');
       res.sendStatus(204)
})*/

//export {app as default};