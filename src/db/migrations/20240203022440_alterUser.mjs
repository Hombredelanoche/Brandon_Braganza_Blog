export const up = async (db) => {
  await db.schema.alterTable("users", (table) => {
    table.integer("roleId").notNullable()
    table.foreign("roleId").references("id").inTable("roles")
  })
}

export const down = async (db) => {
  await db.schema.dropTable("users")
}
