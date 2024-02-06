import { faker } from "@faker-js/faker"

export const seed = async (db) => {
  await db("categories").delete()
  await db("articles").delete()
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

  await db("articles").insert(
    [...new Array(3000)].map(() => ({
      title: faker.lorem.sentence({ min: 3, max: 10 }),
      description: faker.lorem.paragraphs(5),
      createdAt: "04-04-2024",
      updatedAt: "04-04-2024",
      categoriesId:
        categories[
          faker.number.int({
            max: categories.length - 5,
          })
        ].id,
      usersId: 413,
    })),
  )
}
