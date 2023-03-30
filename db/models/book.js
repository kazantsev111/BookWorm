'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
  
    static associate({ User, Book }) {
      this.belongsTo(User, {
        foreignKey: 'userId'
      });
      this.hasMany(Book, {
        foreignKey: 'bookId'
      });
    }
  }
  Book.init({
    autor: DataTypes.STRING,
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