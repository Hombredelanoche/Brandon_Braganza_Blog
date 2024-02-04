import UsersModel from "@/db/models/UsersModel"
import { faker } from "@faker-js/faker"

export const seed = async (db) => {
  const categories = await db("categories")
    .insert([
      { name: "Boxe", createdAt: "04-04-2024", updatedAt: "04-04-2024" },
      { name: "Boxe-thai", createdAt: "04-04-2024", updatedAt: "04-04-2024" },
      { name: "Judo", createdAt: "04-04-2024", updatedAt: "04-04-2024" },
      {
        name: "Renforcement musculaire",
        createdAt: "04-04-2024",
        updatedAt: "04-04-2024",
      },
      {
        name: "Alimentation & bien être",
        createdAt: "04-04-2024",
        updatedAt: "04-04-2024",
      },
    ])
    .returning("*")
  const usersAuthor = await UsersModel.query(db)
    .select("id")
    .where("rolesId", "author")

  await db("articles").insert(
    [...new Array(3000)].map(() => ({
      title: faker.lorem.sentence({ min: 3, max: 10 }),
      description: faker.lorem.paragraphs(5),
      createdAt: "04-04-2024",
      updatedAt: "04-04-2024",
      categoriesId:
        categories[
          faker.number.int({
            min: categories.length - 5,
            max: categories.length - 6,
          })
        ].id,
      usersId:
        usersAuthor[
          faker.number.int({
            max: usersAuthor.length - 1,
          })
        ].id,
    })),
  )
}
