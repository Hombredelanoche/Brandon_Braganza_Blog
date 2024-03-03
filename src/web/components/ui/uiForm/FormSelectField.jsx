import clsx from "clsx"
import { useField } from "formik"

const FormSelectField = ({
  className,
  label,
  name,
  options,
  ...otherProps
}) => {
  const [field, { error, touched }] = useField(name)
  const hasError = Boolean(error & touched)

  return (
    <label className={(clsx("flex flex-col gap-2"), className)}>
      <span className="font-semubold text-sm m-5"> {label} </span>
      <select className="border-2 p-2" {...field} {...otherProps}>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="text-black"
          >
            {option.label}
          </option>
        ))}
      </select>
      {hasError && <span className="text-red-500 text-sm">{error}</span>}
    </label>
  )
}

export default FormSelectField
