'Use strict';

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

let mimes = {
    '.htm' : 'text/html',
    '.css' : 'text/css' ,
    '.js' : 'text/javascript' ,
    '.gif' : 'image/gif' ,
    '.png' : 'image/png' ,
    '.jpg' : 'image/jpeg'
};

function webserver (req, res) {
    let baseURI = url.parse(req.url);
    let filepath = __dirname + (baseURI.pathname === '/' ? '/index.htm' : baseURI.pathname);
    console.log(filepath);
    fs.access(filepath, fs.F_OK | fs.R_OK, (error) => {
        if(!error) {
            fs.readFile(filepath, (error, content) => {
                if(!error) {
                    console.log('Serving >>> ',filepath);
                    let contentType = mimes[path.extname(filepath)];
                    res.writeHead(200, {'Content-type' : contentType });
                    res.end(content, 'utf-8');
                } else {
                    res.writeHead(500);
                    res.end('Internal Server Error');
                }
            });
        } else {
            res.writeHead(404);
            res.end('File Not Found');
        }
    })
};

http.createServer(webserver).listen(3000, () => {
    console.log('Application Started in port 3000 ..');
});