const http = require("http");   // ReferenceError: http is not defined

// req is the request sent by the client
// .url is the url of the request
// .end is the function that sends the response to the client
// .write is the function that writes the body of the response to the client
// .statusCode is the status code of the response
// .writeHead is the function that writes the headers of the response to the client
// .on is the function that listens for events on the request

// in the postman add the header in the request as the authorization and then we can check the password and grant authorization accordingly
const server = http.createServer((req, res) => {
    // Basic routing logic
    console.log(req.headers.authorization); // the headers are not case sensitive probably
    if (req.headers.authorization === "passwordisthis") {
        res.write('authorization granted');
        res.end();
    }
    else res.end('incorrect password');
});

// .listen is the function that starts the server
// .close is the function that stops the server
// .emit is the function that emits an event on the request

server.listen(3000, () => console.log("Server listening on port 3000"))