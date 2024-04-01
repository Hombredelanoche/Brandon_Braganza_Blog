import {
  categoriesNameValidator,
  descriptionValidator,
  titleValidator,
} from "@/utils/validators"
import FormField from "@/web/components/ui/uiForm/FormField"
import axios from "axios"
import { Form, Formik } from "formik"
import { useEffect, useState } from "react"
import { object } from "yup"

const initialValues = {
  title: "",
  description: "",
  category: "",
}

const validationSchema = object({
  title: titleValidator.label("Titre"),
  description: descriptionValidator.label("Description"),
  category: categoriesNameValidator.label("Categorie"),
})

const CreateArticlePage = () => {
  const [categories, setCategories] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:3000/api/categories").then((response) => {
      setCategories(response.data)
    })

    axios.get("http://localhost:3000/api/users").then((response) => {
      setUser(response.data)
    })
  }, [])

  const handleSubmit = async (values, { resetForm }) => {
    const dataToSend = {
      ...values,
      author: user.name,
    }

    await axios.post("http://localhost:3000/api/articles", dataToSend)

    resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormField
          type="text"
          name="title"
          placeholder="Titre de l'article"
          label="Titre"
        />
        <FormField
          type="textarea"
          name="description"
          placeholder="Description de l'article"
          label="Description"
        />

        <button type="submit">Créer l'article</button>
      </Form>
    </Formik>
  )
}

export default CreateArticlePage
