const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('Recipes', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    healthScore: {
      type: DataTypes.INTEGER,
    },
    steps: {
      type: DataTypes.ARRAY(DataTypes.JSON)
    },
    image: {
      type: DataTypes.STRING
    }
    },{
      timestamps: false
  });
};