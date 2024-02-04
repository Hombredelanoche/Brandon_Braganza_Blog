import BaseModel from "@/db/models/BaseModel"
import UsersModel from "@/db/models/UsersModel"

class RolesModel extends BaseModel {
  static tableName = "roles"

  static get relationMappings() {
    return {
      users: {
        relation: BaseModel.HasManyRelation,
        modelClass: UsersModel,
        join: {
          from: "roles.id",
          to: "users.rolesId",
        },
      },
    }
  }
}

export default RolesModel
