const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Comment extends Model {
    static associate(db) {
      this.hasMany(db.Post, {
        as: "post",
        foreignKey: "commentId",
      });
    }
  }

  Comment.init(
    {
      content: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "content", //key to access the database
      },
    },
    {
      sequelize,
      modelName: "Comment", // model name,
      tableName: "comment",
      timestamps: false,
    }
  );

  return Comment;
};
