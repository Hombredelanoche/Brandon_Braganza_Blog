import FormField from "@/web/components/ui/uiForm/FormField"
import axios from "axios"
import { Form, Formik } from "formik"

const initialValues = {
  title: "",
  description: "",
}

const CreateArticlePage = () => {
  const handleSubmit = async (values, { resetForm }) => {
    await axios.post("http://localhost:3000/api/articles", values)

    resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormField />
      </Form>
    </Formik>
  )
}

export default CreateArticlePage
