const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Post extends Model {
    static associate(db) {
      this.belongsTo(db.Category, {
        as: "category",
        foreignKey: "categoryId",
      });
      this.belongsTo(db.Comment, {
        as: "comment",
        foreignKey: "commentId",
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
      view: {
        type: DataTypes.STRING,
        defaultValue: 0,
      },
      like: {
        type: DataTypes.STRING,
        defaultValue: 0,
      },
      dislike: {
        type: DataTypes.STRING,
        defaultValue: 0,
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
