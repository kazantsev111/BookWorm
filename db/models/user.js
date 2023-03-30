'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Book, Comment }) {
      this.hasMany(Book, { foreignKey: 'bookId' });
      this.hasMany(Comment, { foreignKey: 'commentId' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    hashpass: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};