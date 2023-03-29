'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
  
    static associate({ User }) {
      this.belongsTo(User, {
        foreignKey: 'userId'
      });
      this.hasMany(User, {
        foreignKey: 'bookId'
      });
    }
  }
  Book.init({
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    rate: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};