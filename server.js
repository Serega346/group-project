const express = require('express');
const http = require('http');
const app = express();
const TelegramBot = require('node-telegram-bot-api');

const token = '670014733:AAGjvbcpjqQvTmukFhwXTepBgYUhynumF20';
const bot = new TelegramBot(token, {polling: true});
const chatId = -1001167125345;

http.createServer(app).listen(3000);

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'html');
app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
    res.sendFile('index.html', {root : __dirname });
  });

app.post('/submit', (req, res) => {
    console.log('req.body', req.body);
    bot.sendMessage(chatId, `Name: ${req.body.name}\nPhone: ${req.body.phone}\nEmail: ${req.body.email}\nCourses: ${req.body.courses}\nMessage: ${req.body.message}`);
    res.end()
  });

