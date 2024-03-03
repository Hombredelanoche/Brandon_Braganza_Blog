export const seed = async (db) => {
  await db("categories").insert([
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

  await db("roles").insert([
    { id: 1, name: "admin" },
    { id: 2, name: "moderator" },
    { id: 3, name: "user" },
  ])
}
