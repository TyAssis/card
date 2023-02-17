const { DataTypes } = require('sequelize');
const { database } = require('../infrastructure/repository/database')

const Card = database.define('Card', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'cards',
});

module.exports = Card;
