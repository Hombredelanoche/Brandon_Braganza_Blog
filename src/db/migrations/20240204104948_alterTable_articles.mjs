export const up = async (db) => {
  await db.schema.alterTable("articles", (table) => {
    table.integer("categoriesId").notNullable()
    table.foreign("categoriesId").references("id").inTable("categories")
    table.integer("usersId").notNullable()
    table.foreign("usersId").references("id").inTable("users")
  })
}

export const down = async (db) => {
  await db.schema.dropTable("articles")
}
