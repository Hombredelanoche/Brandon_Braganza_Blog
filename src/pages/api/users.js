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
      models: { UserModel },
      res,
    }) => {
      const user = await UserModel.query().findOne({ email })

      if (user) {
        res.send({ result: true })

        return
      }

      const [passwordHash, passwordSalt] =
        await UserModel.hashPassword(password)

      await UserModel.query().insertAndFetch({
        email,
        passwordHash,
        passwordSalt,
      })

      res.send({ result: true })
    },
  ],
})

export default handle
