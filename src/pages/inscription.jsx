import {
  birthdayValidator,
  emailValidator,
  firstnameValidator,
  genderValidator,
  lastnameValidator,
  passwordValidator,
} from "@/utils/validators"
import Alert from "@/web/components/ui/Alert"
import Form from "@/web/components/ui/uiForm/Form"
import Link from "@/web/components/ui/Link"
import SubmitButton from "@/web/components/ui/SubmitButton"
import apiClient from "@/web/services/apiClient"
import { useMutation } from "@tanstack/react-query"
import { Field, Formik } from "formik"
import { object } from "yup"
import FormField from "@/web/components/ui/uiForm/FormField"
import FormSelectField from "@/web/components/ui/uiForm/FormSelectField"

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

const options = [
  { value: "woman", label: "Women" },
  { value: "man", label: "Man" },
  { value: "orther", label: "Other" },
]
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
      <section className="">
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          <Form>
            <FormField
              type="text"
              name="lastname"
              placeholder="Enter your lastname"
              label="Lastname"
            />
            <FormField
              type="text"
              name="firstname"
              placeholder="Enter your firstname"
              label="Firstname"
            />
            <FormField
              type="email"
              name="email"
              placeholder="Enter your email"
              label="E-mail"
            />
            <FormField
              type="password"
              name="password"
              placeholder="Enter your password"
              label="Password"
            />
            <FormField
              type="password"
              name="cpassword"
              placeholder="Confirm your password"
              label="Confirm password"
            />
            <FormField
              type="date"
              name="birthday"
              placeholder="Select your birthday"
              label="Birthday"
            />
            <FormSelectField name="gender" label="Gender" options={options} />
            <SubmitButton>Sign Up</SubmitButton>
          </Form>
        </Formik>
      </section>
    </>
  )
}

export default Inscription
