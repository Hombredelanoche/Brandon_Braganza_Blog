export const up = async (db) => {
  await db.schema.createTable("articles_pictures", (table) => {
    table.increments("id").primary()
    table.integer("articles_id").unsigned().references("articles.id")
    table.integer("picturesId").unsigned().references("pictures.id")
  })
  await db.schema.al
}

export const down = async (db) => {
  await db.schema.dropTable("articles_pictures")
}
