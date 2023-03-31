const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate({ User, Comment, Favorite }) {
      this.belongsTo(User, {
        foreignKey: 'userId',
      });
      this.hasMany(Comment, {
        foreignKey: 'bookId',
      });
      this.hasMany(Favorite, {
        foreignKey: 'bookId',
      });
    }
  }
  Book.init({
    img: DataTypes.STRING,
    autorbook: DataTypes.STRING,
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};
