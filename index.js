const http = require("http");   // ReferenceError: http is not defined

// req is the request sent by the client
// .url is the url of the request
// .end is the function that sends the response to the client
// .write is the function that writes the body of the response to the client
// .statusCode is the status code of the response
// .writeHead is the function that writes the headers of the response to the client
// .on is the function that listens for events on the request


const server = http.createServer((req, res) => {
    // Basic routing logic
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the Homepage!');
    } else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write('"message1": "this is message 1" \n');
        res.write('"message2": "this is message 2" \n');
        setTimeout(() => {
            res.write('"message3" : "message 3 is after this time"');
            res.end();
        }, 2000)            // 2.01 s , 272 B

    } else if (req.url === '/pages') {
        res.writeHead(200, { "content-type": 'text/html' });
        res.end('You are on pages');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// .listen is the function that starts the server
// .close is the function that stops the server
// .emit is the function that emits an event on the request

server.listen(3000, () => console.log("Server listening on port 3000"))