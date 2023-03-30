const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Book, User }) {
      // define association here
      this.belongsTo(Book, {
        foreignKey: 'bookId',
      });
      this.belongsTo(User, {
        foreignKey: 'userId',
      });
    }
  }
  Comment.init({
    post: DataTypes.STRING,
    bookId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
