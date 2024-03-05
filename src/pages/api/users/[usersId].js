import auth from "@/api/middlewares/auth"
import { validate } from "@/api/middlewares/validate"
import {
  birthdayValidator,
  emailValidator,
  firstnameValidator,
  genderValidator,
  idValidator,
  lastnameValidator,
} from "@/utils/validators"

const handle = mw({
  GET: [
    auth,
    validate({
      query: {
        usersId: idValidator,
      },
    }),
    async ({
      models: { UsersModel },
      input: {
        query: { usersId },
      },
      res,
    }) => {
      const user = await UsersModel.query().findById(usersId).throwIfNotFound()

      res.send(user)
    },
  ],
  PATCH: [
    auth,
    validate({
      query: {
        usersId: idValidator,
      },
      body: {
        lastname: lastnameValidator.optional(),
        firstname: firstnameValidator.optional(),
        email: emailValidator.optional(),
        birthday: birthdayValidator.optional(),
        gender: genderValidator.optional(),
      },
    }),
    async ({
      models: { UsersModel },
      input: {
        body,
        query: { usersId },
      },
      res,
    }) => {
      const updatedUser = await UsersModel.query()
        .updateFetchById(usersId, {
          ...body,
          updatedAt: UsersModel.fn.now(),
        })
        .withGraphFetched("users")
        .throwIfNotFound()
      res.send(updatedUser)
    },
  ],
  DELETE: [
    auth,
    validate({
      query: {
        usersId: idValidator,
      },
    }),
    async ({
      models: { UsersModel },
      input: {
        query: { usersId },
      },
      res,
    }) => {
      const user = await UsersModel.query().findById(usersId).throwIfNotFound()
      await user.$query().delete()

      res.send(todo)
    },
  ],
})

export default handle
