const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Category extends Model {
    static associate(db) {
      this.hasMany(db.Post, {
        as: "post",
        foreignKey: "categoryId",
      });
    }
  }

  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
        field: "name", //key truy suất DB
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false, // Not Null
        field: "description",
      },
    },
    {
      sequelize,
      modelName: "Category", // Tên model,
      tableName: "category", //Tên table
      timestamps: false,
    }
  );
  return Category;
};
