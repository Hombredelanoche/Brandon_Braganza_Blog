import { config } from "dotenv"

config({ path: ".env.local" })

const knexfile = {
  development: {
    client: "pg",
    connection: process.env.DB__CONNECTION,
    migrations: {
      directory: "./src/db/migrations",
      stub: "./src/db/migration.stub",
      loadExtensions: [".mjs"],
    },
    seeds: {
      directory: "./src/db/seeds",
      stub: "./src/db/seed.stub",
      loadExtensions: [".mjs"],
    },
  },
}

export default knexfile
