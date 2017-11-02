import fs from 'fs';
import TelegramBot from 'node-telegram-bot-api'
import path from 'path';
import express from 'express';

const app = express();

const TOKEN = '484935789:AAEjnuJwEMC4xDLywoQtUG6yV5x4ogEU1nA',
       DOMAIN = 'https://learnawsnow.com/';

const bot = new TelegramBot(TOKEN)

bot.setWebHook(DOMAIN+TOKEN, fs.createReadStream(path.join(__dirname, '/certs/crt.pem')));

app.post(`/${TOKEN}`, (req, res) => {
       console.log('Message received');
       res.sendStatus(204)
})

export {app as default};