import { faker } from "@faker-js/faker"

export const seed = async (db) => {
  await db("users").delete()
  await db("roles").delete()
  const roles = await db("roles")
    .insert([{ name: "admin" }, { name: "author" }, { name: "visitor" }])
    .returning("*")

  await db("users").insert(
    [...new Array(30)].map(() => ({
      lastname: faker.person.firstName(),
      firstname: faker.person.lastName(),
      email: faker.internet.email(),
      passwordHash: "audhauidadjnd",
      passwordSalt: "audhauidadjnd",
      birthday: faker.date.birthdate(),
      gender: faker.person.gender(),
      createdAt: "04-02-2024",
      updatedAt: "04-02-2024",
      roleId:
        roles[
          faker.number.int({ min: roles.length - 3, max: roles.length - 1 })
        ].id,
    })),
  )
}
