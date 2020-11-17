import { createConnection } from "typeorm";

export const createConnectionPool = () => {
  return createConnection({
    type: "postgres",
    host: "localhost",
    port: 5499,
    username: "root",
    password: "test2020",
    database: "test",
    entities: [__dirname + "/datamodel/**.*s"],
  });
};
