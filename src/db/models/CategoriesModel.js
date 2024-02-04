import ArticlesModel from "@/db/models/ArticlesModel"
import BaseModel from "@/db/models/BaseModel"

class CategoriesModel extends BaseModel {
  static tableName = "categories"

  static get relationMappings() {
    return {
      articles: {
        relation: BaseModel.HasManyRelation,
        modelClass: ArticlesModel,
        join: {
          from: "categories.id",
          to: "articles.categoriesId",
        },
      },
    }
  }
}

export default CategoriesModel
