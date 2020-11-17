module.exports = {
  name: "default",
  type: "postgres",
  host: "localhost",
  port: 5499,
  username: "root",
  password: "test2020",
  database: "test",
  synchronize: false,
  logging: false,
  dropSchema: true,
  entities: ["src/infra/datamodel/**.*s"],
  migrations: ["migration/*.ts"],
  cli: {
    migrationsDir: "migration",
  },
};
