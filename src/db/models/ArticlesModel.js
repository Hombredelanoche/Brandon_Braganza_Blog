import BaseModel from "@/db/models/BaseModel"
import CategoriesModel from "@/db/models/CategoriesModel"
import CommentsModel from "@/db/models/CommentsModel"
import UsersModel from "@/db/models/UsersModel"

class ArticlesModel extends BaseModel {
  static tableName = "articles"

  static get relationMappings() {
    return {
      categories: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: CategoriesModel,
        join: {
          from: "articles.categoriesId",
          to: "categories.id",
        },
      },
      users: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: UsersModel,
        join: {
          from: "articles.usersId",
          to: "users.id",
        },
      },
      comments: {
        relation: BaseModel.HasManyRelation,
        modelClass: CommentsModel,
        join: {
          from: "articles.id",
          to: "comments.articlesId",
        },
      },
    }
  }
}

export default ArticlesModel
