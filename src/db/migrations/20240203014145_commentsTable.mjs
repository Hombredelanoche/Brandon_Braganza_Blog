export const up = async (db) => {
  await db.schema.createTable("comments", (table) => {
    table.increments("id").primary()
    table.string("title", 255).notNullable()
    table.text("description")
    table.timestamps(true, true, true)
    table.integer("idArticles").notNullable()
    table.foreign("idArticles").references("id").inTable("articles")
    table.integer("idUsers").notNullable()
    table.foreign("idUsers").references("id").inTable("users")
  })
}

export const down = async (db) => {
  await db.schema.dropTable("comments")
}
