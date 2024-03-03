import { object } from "yup"

export const validate =
  ({ body: bodyShape, query: queryShape }) =>
  async (ctx) => {
    const {
      req: { query, body },
      next,
    } = ctx
    const validationSchema = object({
      ...(bodyShape ? { body: object(bodyShape).noUnknown() } : {}),
      ...(queryShape ? { query: object(queryShape).noUnknown() } : {}),
    })
    const sanitizedValues = validationSchema.validateSync(
      { body, query },
      { stripUnknown: true, abortEarly: false },
    )

    Object.assign(ctx, { input: sanitizedValues })

    await next()
  }
