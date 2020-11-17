"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConnectionPool = void 0;
var typeorm_1 = require("typeorm");
exports.createConnectionPool = function () {
    return typeorm_1.createConnection({
        type: "postgres",
        host: "localhost",
        port: 5499,
        username: "root",
        password: "test2020",
        database: "test",
        entities: [__dirname + "/entity/*.js"],
        synchronize: true,
    });
};
