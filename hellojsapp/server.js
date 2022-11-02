/*jshint esversion: 6 */

const Http = require("http");
const Express = require("express");
const BodyParser = require("body-parser");

let express = Express();
let server = Http.createServer(express);

express.use(Express.json
({
    extended: true
}));

express.use(Express.urlencoded
({
    extended: true
}));

express.get("/", (request, response) =>
{
    response.send("Welcome" + "\n");
});

express.get("/download", (request, response) =>
{
    response.send("hellojsapp-Download" + "\n");
});

express.post("/upload", (request, response) =>
{
    response.send("hellojsapp-Upload\n" + JSON.stringify(request.body) + "\n");
});

var port = process.env.port || process.env.PORT || 7071;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
