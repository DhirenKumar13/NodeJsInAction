'Use strict';

const http = require('http');
const url = require('url');
const qs = require('querystring');

let routs = {
    "GET": {
        "/": (req, res) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1> Hello World ...</h1>');
        },
        "/about": (req, res) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1> Hello About page ...</h1>');
        },
        "/api/getInfo": (req, res) => {
            res.writeHead(200);
            res.end(JSON.stringify(req.queryParam, undefined, 2));
        }

    },
    "POST": {
        "/api/login": (req, res) => {
            let body = '';
            req.on('data', (data) => {
                body += data;
                if(body.length > 2097152){
                    res.writeHead(413, {'Content-type' : 'text/html'});
                    res.end('<h3> File being uploaded exceeds 2MB limit .. </h3>',
                        () => req.connection.destroy());
                }
            });
            req.on('end', () => {
                let params = qs.parse(body);
                console.log(params);
                console.log('USERNAME : ',params['username']);
                console.log('PASSWORD : ',params['password']);
                res.end(JSON.stringify(params, undefined, 2));
            });
        }
    },
    "NA": (req, res) => {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>  Content/Resource not found </h1>');
    }
}

function router(req, res) {
    let baseUri = url.parse(req.url, true);
    console.log('Base URI is ', baseUri);
    console.log('HTTP method is ', req.method);
    console.log('Requested URI is ', req.url);
    let resolvedRout = routs[req.method][baseUri.pathname];
    if(resolvedRout != undefined){
        req.queryParam = baseUri.query;
        resolvedRout(req, res);
    }else {
        routs["NA"](req, res);
    }
}

http.createServer(router).listen(3000, () => {
    console.log('Application Started in port 3000 ..');
});