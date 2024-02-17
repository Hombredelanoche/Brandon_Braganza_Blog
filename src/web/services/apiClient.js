import config from "@/web/config"
import axios, { AxiosError } from "axios"

export class ApiClientError extends Error {
  data = null

  constructor(err) {
    super(err)

    const {
      response: { data },
    } = err

    this.data = data

    if (typeof data === "string") {
      this.message = data

      return
    }

    this.message = data?.error?.message || data?.error || data
  }
}
const createApiClient =
  (method = "GET") =>
  (...args) => {
    const client = axios.create({
      baseURL: config.api.baseUrl,
    })

    return client[method.toLowerCase()](...args)
      .then(({ data }) => data)
      .catch((err) => {
        if (!(err instanceof AxiosError)) {
          throw err
        }

        throw new ApiClientError(err)
      })
  }
const apiClient = createApiClient()
apiClient.post = createApiClient("POST")
apiClient.patch = createApiClient("PATCH")
apiClient.delete = createApiClient("DELETE")

export default apiClient
