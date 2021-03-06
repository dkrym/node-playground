const http = require('http');
const fs = require('fs');
const _ = require('lodash');

//lodash
const num = _.random(0, 20);

const server = http.createServer((req, res) => {
    //console.log(req.method, req.url);

    //lodash test
    const num = _.random(0, 20);

    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    // router
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me': // redirect
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }


    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            res.end(data);
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on 3000');
});
