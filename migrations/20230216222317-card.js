const { DataTypes } = require('sequelize');

module.exports = {
  async up (queryInterface) {
    return queryInterface.createTable('cards', {
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
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },
  async down (queryInterface) {
    queryInterface.dropTable('cards');
  }
};
