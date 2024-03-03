import { validate } from "@/api/middlewares/validate"
import mw from "@/api/mw"
import {
  birthdayValidator,
  emailValidator,
  firstnameValidator,
  genderValidator,
  lastnameValidator,
  passwordValidator,
} from "@/utils/validators"

const handle = mw({
  POST: [
    validate({
      body: {
        lastname: lastnameValidator,
        firstname: firstnameValidator,
        email: emailValidator,
        password: passwordValidator,
        birthday: birthdayValidator,
        gender: genderValidator,
      },
    }),
    async ({
      input: {
        body: { lastname, firstname, email, password, birthday, gender },
      },
      models: { UsersModel },
      res,
    }) => {
      const user = await UsersModel.query().findOne({
        lastname,
        firstname,
        email,
        birthday,
        gender,
      })

      if (user) {
        res.send({ result: true })

        return
      }

      const [passwordHash, passwordSalt] =
        await UsersModel.hashPassword(password)

      await UsersModel.query().insertAndFetch({
        lastname,
        firstname,
        email,
        passwordHash,
        passwordSalt,
        birthday,
        gender,
      })

      res.send({ result: true })
    },
  ],
})

export default handle
