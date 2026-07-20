//raw.server.js (no NPM needed)
const http = require('http'); //built-in module

const server = http.createServer((req, res) =>{
    //req: incoming request (method, url, headers)
    //res: outgoing response(write, end)....callback functions

if (req.method === 'GET' && req.url ==='/') { 
    //manual route check
 res.writeHead(200, {'content-Type': 'text/plain'}); //manual headers
 res.end('Hello from Raw Node.js!'); //send body & close
} else {
    res.WriteHead(404, {'content-type' : 'text/plain'});
    res.end('Not found :('); //basic error
}
});
const PORT = 3000;
server.listen(PORT, () =>{
    console.log(`Raw server running on http://localhost:${PORT}`);
});