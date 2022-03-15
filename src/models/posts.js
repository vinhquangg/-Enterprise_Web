const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Post extends Model {
    static associate(db) {
      this.belongsTo(db.Category, {
        as: "category",
        foreignKey: "categoryId",
      });
    }
  }

  Post.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "name", //key to access the database
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "description", //key to access the database
      },
      content: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "content", //key to access the database
      },
      categoryId: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "categoryId", //key to access the database
      },
      commentId: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "commentId", //key to access the database
      },
      viewId: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "viewId", //key to access the database
      },
      like: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "like", //key to access the database
      },
      dislike: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "dislike", //key to access the database
      },
    },
    {
      sequelize,
      modelName: "Post", // model name,
      tableName: "post",
      timestamps: false,
    }
  );

  return Post;
};
