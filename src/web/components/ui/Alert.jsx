import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid"
import clsx from "clsx"

const variants = {
  info: "bg-blue-200 text-blue-800",
  danger: "bg-red-200 text-red-800",
  success: "bg-green-200 text-green-800",
}
const icons = {
  info: InformationCircleIcon,
  danger: ExclamationCircleIcon,
  success: CheckCircleIcon,
}
const Alert = ({ className, variant = "info", children, ...otherProps }) => {
  const Icon = icons[variant]

  return (
    <div
      className={clsx(
        "p-3 rounded-lg flex items-center gap-4",
        variants[variant],
        className,
      )}
      {...otherProps}
    >
      <Icon className="w-10 h-10" />
      {children}
    </div>
  )
}

export default Alert
