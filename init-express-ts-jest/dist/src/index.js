"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = 8080; // default port to listen
app.use(express_1.default.json());
// define a route handler for the default home page
app.get("/", function (_, res) {
    res.send("Hello world!");
});
app.post("/", function (req, res) {
    res.send("body2: " + JSON.stringify(req.body));
});
// start the Express server
app.listen(port, function () {
    console.log("server started at http://localhost:" + port);
});
