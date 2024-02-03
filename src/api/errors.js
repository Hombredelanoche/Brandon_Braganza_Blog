/* eslint-disable max-classes-per-file */
import { HTTP_ERRORS } from "@/api/constants"

export class PublicError extends Error {
  httpCode = 0

  toJSON() {
    return {
      message: this.message,
      httpCode: this.httpCode,
    }
  }
}

export class NotFoundError extends PublicError {
  httpCode = HTTP_ERRORS.NOT_FOUND

  constructor(message = "Not found") {
    super(message)
  }
}

export class UnauthorizedError extends PublicError {
  httpCode = HTTP_ERRORS.UNAUTHORIZED

  constructor(message = "Wrong credentials") {
    super(message)
  }
}
