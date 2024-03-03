import { emailValidator, passwordValidator } from "@/utils/validators"
import { useSession } from "@/web/components/SessionContext"
import ErrorMessage from "@/web/components/ui/ErrorMessage"
import SubmitButton from "@/web/components/ui/SubmitButton"
import Form from "@/web/components/ui/uiForm/Form"
import FormField from "@/web/components/ui/uiForm/FormField"
import apiClient from "@/web/services/apiClient"
import { useMutation } from "@tanstack/react-query"
import { Formik } from "formik"
import { useRouter } from "next/router"
import { object } from "yup"

const initialValues = {
  email: "",
  password: "",
}

const validationSchema = object({
  email: emailValidator.label("Email"),
  password: passwordValidator.label("Password"),
})

const Connexion = () => {
  const router = useRouter()
  const { saveSessionToken } = useSession()
  const { mutateAsync, error } = useMutation({
    mutationFn: (values) => apiClient.post("/sessions", values),
  })
  const handleSubmit = async (values) => {
    const { result: jwt } = await mutateAsync(values)

    saveSessionToken(jwt)

    router.push("/")
  }

  return (
    <div className="flex flex-col gap-4">
      <ErrorMessage error={error} />
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormField
            name="email"
            type="email"
            placeholder="Enter your e-mail"
            label="E-mail"
          />
          <FormField
            name="password"
            type="password"
            placeholder="Enter your password"
            label="Password"
          />
          <SubmitButton>Sign In</SubmitButton>
        </Form>
      </Formik>
    </div>
  )
}
export default Connexion
