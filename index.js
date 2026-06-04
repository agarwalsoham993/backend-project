const http = require("http");   // ReferenceError: http is not defined

// req is the request sent by the client
// .url is the url of the request
// .end is the function that sends the response to the client
// .write is the function that writes the body of the response to the client
// .statusCode is the status code of the response
// .writeHead is the function that writes the headers of the response to the client
// .on is the function that listens for events on the request


const server = http.createServer((req, res) => {
    console.log("request for: ", req.url)                   // logs in my console
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('this is the body \n');
    res.write('this is body 2');
    res.end();
})

// .listen is the function that starts the server
// .close is the function that stops the server
// .emit is the function that emits an event on the request

server.listen(3000, () => console.log("Server listening on port 3000"))