const { Sequelize, Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class View extends Model {
    static associate(db) {
     this.hasMany(db.posts,{
       as:"post",
       foreignKey:"viewId"
     })
    }
  }

  View.init(
    {
      View: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "View", //key truy suất DB
      },
      postId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    
    {
      sequelize,
      modelName: "view", // Tên model,
      tableName: "View", //Tên table
      timestamps: true,
    }
  );
  return View;
};
