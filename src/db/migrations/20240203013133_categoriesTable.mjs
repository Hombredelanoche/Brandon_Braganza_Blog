export const up = async (db) => {
  await db.schema.createTable("categories", (table) => {
    table.increments("id").primary()
    table.timestamps(true, true, true)
    table.string("name", 75).unique().notNullable()
  })

  await db.schema.alterTable("articles", (table) => {
    table.integer("categoriesId").notNullable()
    table.foreign("categoriesId").references("id").inTable("categories")
  })
}

export const down = async (db) => {
  await db.schema.dropTable("categories")
}
