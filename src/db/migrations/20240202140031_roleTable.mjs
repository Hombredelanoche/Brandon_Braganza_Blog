export const up = async (db) => {
  await db.schema.createTable("roles", (table) => {
    table.increments("id").primary()
    table.string("name").unique()
  })
}

export const down = async (db) => {
  await db.schema.dropTable("roles")
}
