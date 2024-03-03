export const up = async (db) => {
  await db.schema.createTable("users", (table) => {
    table.increments("id").primary()
    table.string("lastname", 75).notNullable()
    table.string("firstname", 75).notNullable()
    table.string("email", 255).unique().notNullable()
    table.text("passwordHash").notNullable()
    table.text("passwordSalt").notNullable()
    table.date("birthday").notNullable()
    table.string("gender", 50).notNullable()
    table.timestamps(true, true, true)
    table.integer("roleId").notNullable()
    table.foreign("roleId").references("id").inTable("roles")
  })
}

export const down = async (db) => {
  await db.schema.dropTable("users")
}
