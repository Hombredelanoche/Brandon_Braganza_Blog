import clsx from "clsx"
import { Form as FormikForm } from "formik"

const Form = ({ className, ...otherProps }) => (
  <FormikForm
    className={clsx("flex flex-col gap-4", className)}
    noValidate
    {...otherProps}
  />
)

export default Form
