import { emailValidator, passwordValidator } from "@/utils/validators"
import { useSession } from "@/web/components/SessionContext"
import Button from "@/web/components/ui/Button"
import ErrorMessage from "@/web/components/ui/ErrorMessage"
import SubmitButton from "@/web/components/ui/SubmitButton"
import Form from "@/web/components/ui/uiForm/Form"
import FormField from "@/web/components/ui/uiForm/FormField"
import apiClient from "@/web/services/apiClient"
import { useMutation } from "@tanstack/react-query"
import { Formik } from "formik"
import Link from "next/link"
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
    <section className="flex justify-center items-center mt-28">
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className="w-full max-w-lg bg-white rounded-lg shadow-sm">
          <ErrorMessage error={error} />
          <h2 className="text-2xl font-semibold mb-4 text-black">
            Se connecter
          </h2>
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

          <span className="text-xs">
            Vous n'êtes pas encore inscrit ?
            <Link href="/inscription" className="font-semibold">
              {" "}
              Rejoingnez-nous !
            </Link>
          </span>
          <section className="flex justify-center">
            <SubmitButton>Connexion</SubmitButton>
          </section>
        </Form>
      </Formik>
    </section>
  )
}
export default Connexion
