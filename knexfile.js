// require("dotenv").config();
// const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/auth";

// module.exports = {
//   development: {
//     client: "sqlite3",
//     useNullAsDefault: true,
//     connection: {
//       filename: "./data/auth.db3",
//     },
// pool: {
//   afterCreate: (conn, done) => {
//     conn.run("PRAGMA foreign_keys = ON", done);
//   },
//     },
//     migrations: {
//       directory: "./data/migrations",
//     },
//     seeds: {
//       directory: "./data/seeds",
//     },
//   },
//   production: {
//     client: "pg",
//     connection: pgConnection,
//     pool: {
//       min: 2,
//       max: 10,
//     },
//     migrations: {
//       directory: "./database/migrations",
//     },
//     seeds: {
//       directory: "./database/seeds",
//     },
//   },
// };

const pg = require("pg");
const localConnection = "postgresql://postgres:action33@localhost/cloud-schoolz";
let connection;
if (process.env.DATABASE_URL) {
  pg.defaults.ssl = { rejectUnauthorized: false };
  connection = process.env.DATABASE_URL;
} else {
  connection = localConnection;
}
const sharedConfig = {
  client: "pg",
  connection,
  migrations: { directory: "./data/migrations" },
  seeds: { directory: "./data/seeds" },
};
module.exports = {
  development: { ...sharedConfig },
  production: { ...sharedConfig, pool: { min: 2, max: 10 } },
  testing: { ...sharedConfig, connection: { filename: "./database/test.pg" } },
};
