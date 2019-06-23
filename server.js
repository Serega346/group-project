const http = require('http');
const fs = require('fs');
const queryString = require('querystring');
const TelegramBot = require('node-telegram-bot-api');

const token = '670014733:AAGjvbcpjqQvTmukFhwXTepBgYUhynumF20';
const bot = new TelegramBot(token, {polling: true});

http.createServer(function (req, res) {

    if (req.url === "/group-project") {
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./index.html", "UTF-8").pipe(res);
    }

    if (req.method === "POST") {
        let data = "";

        req.on("data", function (chunck) {
            data += chunck;
        });
//@TODO назва об'єкта [Object: null prototype] виправити
        req.on("end", function () {
            let formdata = queryString.parse(data);
            console.log(); // Вивід даних форми в консоль як об'єкт
        });
    }
}).listen(63342);   //WebStorm standard port

bot.sendMessage(-1001167125345, "fdlgfdghdfg");
