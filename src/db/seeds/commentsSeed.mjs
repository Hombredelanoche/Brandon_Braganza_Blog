import { faker } from "@faker-js/faker"

export const seed = async (db) => {
  await db("comments").delete()
  await db("comments").insert(
    [...new Array(3000)].map(() => ({
      title: faker.lorem.sentence(10),
      description: faker.lorem.paragraphs(5),
      createdAt: "04-04-2024",
      updatedAt: "04-04-2024",
      idArticles: faker.number.int({ min: 1, max: 3000 }),
      idUsers: faker.number.int({ min: 1, max: 30 }),
    })),
  )
}
