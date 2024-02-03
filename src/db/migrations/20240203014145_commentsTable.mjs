export const up = async (db) => {
  await db.schema.createTable("comments", (table) => {
    table.increments("id").primary()
    table.string("title", 255).notNullable()
    table.text("description")
    table.timestamps(true, true, true)
  })
}

export const down = async (db) => {
  await db.schema.dropTable("comments")
}
