export const up = async (db) => {
  await db.schema.createTable("categories", (table) => {
    table.increments("id").primary()
    table.timestamps(true, true, true)
    table.string("name", 75).unique().notNullable()
  })
}

export const down = async (db) => {
  await db.schema.dropTable("categories")
}
