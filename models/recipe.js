'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.recipe.belongsTo(models.user);
    }
  }
  recipe.init({
    recipeName: DataTypes.STRING,
    image: DataTypes.STRING,
    sourceUrl: DataTypes.STRING,
    healthScore: DataTypes.INTEGER,
    pricePerServing: DataTypes.INTEGER,
    vegetarian: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'recipe',
  });
  return recipe;
};