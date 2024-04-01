import { validate } from "@/api/middlewares/validate"
import mw from "@/api/mw"
import { categoriesNameValidator, pageValidator } from "@/utils/validators"
import config from "@/web/config"

const handle = mw({
  POST: [
    validate({
      body: {
        name: categoriesNameValidator,
      },
    }),
    async ({
      models: { CategoriesModel },
      input: {
        body: { name },
      },
      res,
    }) => {
      const categorie = await CategoriesModel.query().insertAndFetch({ name })

      res.send(categorie)
    },
  ],
  GET: [
    validate({
      query: {
        page: pageValidator.optional(),
      },
    }),
    async ({
      res,
      models: { CategoriesModel },
      input: {
        query: { page },
      },
    }) => {
      const query = CategoriesModel.query()
      const categories = await query
        .clone()
        .limit(config.ui.itemsPerPage)
        .offset((page - 1) * config.ui.itemsPerPage)
      const [{ count }] = await query.clone().count()

      res.send({
        result: categories,
        meta: {
          count,
        },
      })
    },
  ],
})

export default handle
