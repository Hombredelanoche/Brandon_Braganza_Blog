import auth from "@/api/middlewares/auth"
import { validate } from "@/api/middlewares/validate"
import mw from "@/api/mw"
import {
  descriptionValidator,
  idValidator,
  titleValidator,
} from "@/utils/validators"

const handle = mw({
  GET: [
    validate({
      query: {
        articleId: idValidator,
      },
    }),
    async ({
      models: { ArticlesModel },
      input: {
        query: { articleId },
      },
      res,
    }) => {
      const article = await ArticlesModel.query()
        .findById(articleId)
        .throwIfNotFound()

      res.send(article)
    },
  ],
  PATCH: [
    auth,
    validate({
      query: {
        articleId: idValidator,
      },
      body: {
        title: titleValidator.optional(),
        description: descriptionValidator.optional(),
        author: idValidator.optional(),
      },
    }),
    async ({
      models: { ArticlesModel },
      input: {
        body,
        query: { articleId },
      },
      res,
    }) => {
      const updatedarticle = await ArticlesModel.query()
        .updateAndFetchById(articleId, {
          ...body,
          updatedAt: ArticlesModel.fn.now(),
        })
        .withGraphFetched("category")
        .throwIfNotFound()

      res.send(updatedarticle)
    },
  ],
  DELETE: [
    auth,
    validate({
      query: {
        articleId: idValidator,
      },
    }), 
    async ({
      models: { ArticlesModel },
      input: {
        query: { articleId },
      },
      res,
    }) => {
      const article = await ArticlesModel.query()
        .findById(articleId)
        .throwIfNotFound()

      await article.$query().delete()

      res.send(article)
    },
  ],
})

export default handle
