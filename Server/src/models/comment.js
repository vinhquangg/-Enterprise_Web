const { Sequelize, Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class comments extends Model {
    static associate(db) {
      this.hasMany(db.posts, {
        as: "comment",
        foreignKey: "commentId",
      });
    }
  }

  comments.init(
    {
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
      },
    },
    {
      sequelize,
      modelName: "comments", // Tên model,
      tableName: "Comments", //Tên table
      timestamps: true,
    }
  );
  return comments;
};