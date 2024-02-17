import {
  birthdayValidator,
  emailValidator,
  firstnameValidator,
  genderValidator,
  lastnameValidator,
  passwordValidator,
} from "@/utils/validators"
import Alert from "@/web/components/ui/Alert"
import Form from "@/web/components/ui/Form"
import FormField from "@/web/components/ui/FormField"
import Link from "@/web/components/ui/Link"
import SubmitButton from "@/web/components/ui/SubmitButton"
import apiClient from "@/web/services/apiClient"
import { useMutation } from "@tanstack/react-query"
import { Field, Formik } from "formik"
import { object } from "yup"

const initialValues = {
  lastname: "",
  firstname: "",
  email: "",
  password: "",
  cpassword: "",
  birthday: "",
  gender: "",
  roleId: 3,
}

const validationSchema = object({
  lastname: lastnameValidator.label("Lastname"),
  firstname: firstnameValidator.label("Firstname"),
  email: emailValidator.label("E-mail"),
  password: passwordValidator.label("Password"),
  birthday: birthdayValidator.label("Birthday"),
  gender: genderValidator.label("Gender"),
})

const Inscription = () => {
  const { isSuccess, mutateAsync } = useMutation({
    mutationFn: (values) => apiClient.post("/users", values),
  })
  const handleSubmit = async (values) => {
    await mutateAsync(values)

    return true
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col gap-4">
        <Alert>
          We just sent you an e-mail. Please use the provided link to validate
          your account ❤️
        </Alert>
        <p>
          <Link href="/sign-in">Go to sign-in page.</Link>
        </p>
      </div>
    )
  }

  return (
    <>
      <section>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field
              type="text"
              name="lastname"
              placeholder="Enter your lastname"
              className="text-black p-2"
            />
            <Field
              type="text"
              name="firstname"
              placeholder="Enter your firstname"
              className="text-black p-2"
            />
            <Field
              type="email"
              name="email"
              placeholder="Enter your email"
              className="text-black p-2"
            />
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
              className="text-black p-2"
            />
            <Field
              type="password"
              name="cpassword"
              placeholder="Confirm your password"
              className="text-black p-2"
            />
            <Field
              type="date"
              name="birthday"
              placeholder="Select your birthday"
              className="text-black p-2"
            />
            <Field as="select" name="gender" className="text-black p-2">
              <option value="" className="text-black">
                Select your gender
              </option>
              <option value="Male" className="text-black">
                Male
              </option>
              <option value="Female" className="text-black">
                Female
              </option>
              <option value="Other" className="text-black">
                Other
              </option>
            </Field>
            <SubmitButton>Sign Up</SubmitButton>
          </Form>
        </Formik>
      </section>
    </>
  )
}

export default Inscription
