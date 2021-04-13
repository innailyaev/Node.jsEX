const http = require('http');
const fs = require('fs');
const path = require('path');
const usersJson = require('./users.json');
const port = 3000;


http.createServer((req, res) => {

    if (req.method === "GET") {

        res.writeHead(200,{ 'Content-Type': 'text/plain' })
     
        switch(req.url){
            case "/raw-html":
                res.write('<h1> Hello, my name is inna </h1>');
                res.end();
                break;
            case "/users":
                res.write(JSON.stringify(usersJson));
                res.end();
                break;
            case "/":
                fs.readFile(path.join(__dirname, '/index.html'), null, (err, data) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' })
                    if (err) {
                        console.log(err)
                    } else {
                        res.write(data)
                    }
                    res.end()
                })
                break;   
        }
    }
    else {
        console.log("only GET");
    }
}).listen(port);

