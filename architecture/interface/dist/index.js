"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var calculate_1 = require("./calculate");
var app = express_1.default();
var port = 8080; // default port to listen
app.use(express_1.default.json());
app.get('/add', function (req, res) {
    var _a = req.query, num1 = _a.num1, num2 = _a.num2;
    var result = calculate_1.add(Number(num1), Number(num2));
    res.send(JSON.stringify(result));
});
app.get('/subtract', function (req, res) {
    var _a = req.query, num1 = _a.num1, num2 = _a.num2;
    var result = calculate_1.subtract(Number(num1), Number(num2));
    res.send(JSON.stringify(result));
});
app.listen(port, function () {
    console.log("server started at http://localhost:" + port);
});
