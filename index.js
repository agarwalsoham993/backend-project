const http = require("http");   // ReferenceError: http is not defined
const express = require("express");
const app = express();
const PORT = 3000;
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
        console.log("Auth middleware passed");
        next();
    } else {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: "Unauthorized" }));
    }
};

// Route: Secured
app.get('/api', authenticate, (req, res) => {
    // Express automatically sets Content-Type to application/json
    res.json({ message: "Welcome to the secured area!" });
});

app.post('/api', authenticate, (req, res) => {
    // Express automatically sets Content-Type to application/json
    res.json({ message: "Secured area from any request" });
});

// for any other request from ones defined here it will automatically handle the issue
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));