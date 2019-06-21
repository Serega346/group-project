const http = require('http');
const fs = require('fs');
const queryString = require('querystring');

http.createServer(function (req, res) {

    if (req.url === "") {
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./index.html", "UTF-8").pipe(res);
    }

    if (req.method === "POST") {
        let data = "";

        req.on("data", function (chunck) {
            data += chunck;
        });

        req.on("end", function () {
            let formdata = queryString.parse(data);
            console.log(formdata);
        });
    }
}).listen("serega346.github.io/group-project/");