const http = require("http");   // ReferenceError: http is not defined
const { type } = require("os");

// req is the request sent by the client
// .url is the url of the request
// .end is the function that sends the response to the client
// .write is the function that writes the body of the response to the client
// .statusCode is the status code of the response
// .writeHead is the function that writes the headers of the response to the client
// .on is the function that listens for events on the request

// we can rather use a middleware instead of checking the authentication manually 

const SECRET_PASSWORD = "passwordisthis";

const authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (authHeader === SECRET_PASSWORD) {
        console.log("Auth passed, moving to next step...");
        next(); // This is the trigger to continue to the main logic
    } else {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: "Unauthorized" }));
    }
};

const main_code = (req, res) => {
    // 1. Use a standard Content-Type
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // 2. Stringify the object and use write()
    const responseData = JSON.stringify({
        message: "this is reaching main code",
        status: "authentication successful"
    });

    // 3. Send the full payload in end() or write()
    res.end(responseData);
}

const server = http.createServer((req, res) => {
    authenticate(req, res, () => {
        main_code(req, res);
    });
});

// .listen is the function that starts the server
// .close is the function that stops the server
// .emit is the function that emits an event on the request

server.listen(3000, () => console.log("Server listening on port 3000"))