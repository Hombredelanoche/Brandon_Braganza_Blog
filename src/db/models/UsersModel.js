import BaseModel from "@/db/models/BaseModel"
import config from "@/config"
import { pbkdf2, randomBytes } from "node:crypto"
import { promisify } from "node:util"
import 

class UsersModel extends BaseModel {
  static tableName = "users"

  static async hashPassword(
    password,
    salt = randomBytes(config.security.password.keylen).toString("hex"),
  ) {
    return [
      (
        await pbkdf2Async(
          password,
          salt + config.security.password.pepper,
          config.security.password.iterations,
          config.security.password.keylen,
          config.security.password.digest,
        )
      ).toString("hex"),
      salt,
    ]
  }

  static get relationMappings() {
    return {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: RolesModel,
      join: {
        from: "users.rolesId",
        to: "roles.id"
      }
    }
  }
}
import RolesModel from "@/db/models/RolesModel"

export default UsersModel
