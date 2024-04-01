import auth from "@/api/middlewares/auth"
import { validate } from "@/api/middlewares/validate"
import mw from "@/api/mw"
import {
  idValidator,
  pageValidator,
  statusValidator,
  todoDescriptionValidator,
} from "@/utils/validators"
import config from "@/web/config"

const handle = mw({
  POST: [
    auth,
    validate({
      body: {
        title: titleValidator,
        description: todoDescriptionValidator,
        categoryId: idValidator,
        isDone: statusValidator.optional(),
      },
    }),
    async ({
      models: { TodoModel },
      input: {
        body: { description, categoryId, isDone },
      },
      res,
    }) => {
      const todo = await TodoModel.query()
        .insertAndFetch({
          description,
          categoryId,
          isDone,
        })
        .withGraphFetched("category")

      res.send(todo)
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
      models: { TodoModel },
      input: {
        query: { page },
      },
    }) => {
      const query = TodoModel.query()
      const todos = await query
        .clone()
        .withGraphFetched("category")
        .orderBy("createdAt", "DESC")
        .limit(config.ui.itemsPerPage)
        .offset((page - 1) * config.ui.itemsPerPage)
      const [{ count }] = await query.clone().count()

      res.send({
        result: todos,
        meta: {
          count,
        },
      })
    },
  ],
})

export default handle
