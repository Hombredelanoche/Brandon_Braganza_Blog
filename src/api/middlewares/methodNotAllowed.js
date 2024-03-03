import { HTTP_ERRORS } from "@/api/constants"

const methodNotAllowed = (req, res) => {
  res
    .status(HTTP_ERRORS.METHOD_NOT_ALLOWED)
    .send({ error: "Method not allowed" })
}

export default methodNotAllowed
