import { Chalk } from "chalk"

const colors = new Chalk()
const log = async ({ req, res, next }) => {
  const now = Date.now()

  await next()

  // eslint-disable-next-line no-console
  console.info(
    `${colors.bgWhite(res.statusCode)} ${colors.green(req.method)} ${req.url} ${
      Date.now() - now
    }ms`,
  )
}

export default log
