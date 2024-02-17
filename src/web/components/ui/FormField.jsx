import clsx from "clsx"
import { useField } from "formik"

const FormField = ({ name, label, className, ...otherProps }) => {
  const [field, { error, touched }] = useField(name)
  const hasError = Boolean(error && touched)

  return (
    <label className={clsx("flex flex-col gap-2", className)}>
      <span className="font-semibold text-sm">{label}</span>
      <input className="border-2 p-2" {...field} {...otherProps} />
      {hasError && <span className="text-red-500 text-sm">{error}</span>}
    </label>
  )
}

export default FormField
