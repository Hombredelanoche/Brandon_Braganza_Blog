import BaseModel from "@/db/models/BaseModel"
import RolesModel from "@/db/models/RolesModel"
import config from "@/config"
import { pbkdf2, randomBytes } from "node:crypto"
import { promisify } from "node:util"
import CommentsModel from "@/db/models/CommentsModel"
import ArticlesModel from "@/db/models/ArticlesModel"

const pbkdf2Async = promisify(pbkdf2)

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
      roles: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: RolesModel,
        join: {
          from: "users.rolesId",
          to: "roles.id",
        },
      },
      comments: {
        relation: BaseModel.HasManyRelation,
        modelClass: CommentsModel,
        join: {
          from: "users.id",
          to: "comments.usersId",
        },
      },
      articles: {
        relation: BaseModel.HasManyRelation,
        modelClass: ArticlesModel,
        join: {
          from: "users.id",
          to: "articles.usersId",
        },
      },
    }
  }
}

export default UsersModel
