export const up = async (db) => {
  await db.schema.createTable("pictures", (table) => {
    table.increments("id").primary()
    table.string("name", 100).unique().notNullable()
    table.timestamps(true, true, true)
  })
}

export const down = async (db) => {
  await db.schema.dropTable("pictures")
}
