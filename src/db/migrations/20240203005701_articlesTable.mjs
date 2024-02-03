export const up = async (db) => {
  await db.schema.createTable("articles", (table) => {
    table.increments("id").primary()
    table.string("title", 255).unique().notNullable()
    table.text("description").notNullable()
    table.timestamps(true, true, true)
  })
}

export const down = async (db) => {
  await db.schema.dropTable("articles")
}
