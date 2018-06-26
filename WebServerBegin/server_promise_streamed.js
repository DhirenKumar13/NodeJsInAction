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

function fileAccess(filepath) {
    return new Promise((resolve , reject) => {
        fs.access(filepath, fs.F_OK, (error) => {
            if(! error){
                resolve(filepath);
            }else {
                reject(error);
            }
        });
    });
}

function fileStreamedReader(filepath) {
    return new Promise((resolve, reject) => {
        let fileStream = fs.createReadStream(filepath);
        fileStream.on('open', () => {
            resolve(fileStream);
        });
        fileStream.on('error' , () => {
            reject(error)
        })
    });
}
function webserver (req, res) {
    let baseURI = url.parse(req.url);
    let filepath = __dirname + (baseURI.pathname === '/' ? '/index.htm' : baseURI.pathname);
    console.log(filepath);
    let contentType = mimes[path.extname(filepath)];

    fileAccess(filepath).then(fileStreamedReader)
                        .then((fileStream) => {
                            res.writeHead(200, {'Content-type' : contentType });
                            fileStream.pipe(res);
                        })
                        .catch( error => {
                            res.writeHead(404);
                            res.end(JSON.stringify(error, undefined, 2));
                        })
};

http.createServer(webserver).listen(3000, () => console.log('Application Started in port 3000 ..'));