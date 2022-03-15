const { Sequelize, Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class posts extends Model {
    static associate(db) {
      this.belongsTo(db.category, {
        as: "category",
        foreignKey: "categoryId",
      });
      this.belongsTo(db.comment, {
        as: "comment",
        foreignKey: "commentId",
      });
    }
  }

  posts.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false, // Not Null
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false, // Not Null
        required: true,
      },
      categoryId: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "categoryId",
      },
      commentId: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "commentId",
      },
      view: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "viewId",
      },
    },
    {
      sequelize,
      modelName: "posts", // Tên model,
      tableName: "Posts", //Tên table
      timestamps: true,
    }
  );
  return posts;
};
