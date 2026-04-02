import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

export default {
  development: {
    client: "pg",
    connection: {
      host: process.env.PG_HOST,
      port: process.env.PG_PORT,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./migrations",
    },
  },
  staging: {
    client: "pg",
    connection: {
      host: process.env.PG_HOST,
      port: process.env.PG_PORT,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./migrations",
    },
    debug: true,
  },
  production: {
    client: "pg",
    connection: {
      host: process.env.PG_HOST,
      port: process.env.PG_PORT,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./migrations",
    },
    debug: false,
  },
};
console.log(
  "DB password:",
  process.env.PG_PASSWORD,
  "type:",
  typeof process.env.PG_PASSWORD
);
