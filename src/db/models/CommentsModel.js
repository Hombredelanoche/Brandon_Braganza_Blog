import ArticlesModel from "@/db/models/ArticlesModel"
import BaseModel from "@/db/models/BaseModel"
import UsersModel from "@/db/models/UsersModel"

class CommentsModel extends BaseModel {
  static tableName = "comments"

  static get relationMappings() {
    return {
      users: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: UsersModel,
        join: {
          from: "comments.usersId",
          to: "users.id",
        },
      },
      articles: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: ArticlesModel,
        join: {
          from: "comments.articlesId",
          to: "articles.id",
        },
      },
    }
  }
}

export default CommentsModel
