import clsx from "clsx"
import NextLink from "next/link"

const Link = ({ styless = false, ...otherProps }) => (
  <NextLink
    className={clsx({
      underline: styless,
      "text-black": true,
    })}
    {...otherProps}
  />
)

export default Link
