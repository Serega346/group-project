/*const http = require('http');
const fs = require('fs');
const queryString = require('querystring');

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
            console.log(formdata); // Вивід даних форми в консоль як об'єкт
        });
    }
}).listen(63342);   //WebStorm standard port*/

const express = require('express');
const http = require('http')
const app = express();


http.createServer(app).listen(3000)

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'html');
app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
    res.sendFile('index.html', {root : __dirname });
  })

app.post('/submit-form', (req, res) => {
    console.log('req.body', req.body['User name']);
    res.end()
  })