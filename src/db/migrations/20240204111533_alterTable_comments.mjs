export const up = async (db) => {
  await db.schema.alterTable("comments", (table) => {
    table.integer("idArticles").notNullable()
    table.foreign("idArticles").references("id").inTable("articles")
    table.integer("idUsers").notNullable()
    table.foreign("idUsers").references("id").inTable("users")
  })
}

export const down = async (db) => {
  await db.schema.dropTable("comments")
}
