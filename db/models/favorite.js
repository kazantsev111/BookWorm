const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Book }) {
      this.belongsTo(Book, {
        foreignKey: 'bookId',
      });
      this.belongsTo(User, {
        foreignKey: 'userId',
      });
    }
  }
  Favorite.init({
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};
