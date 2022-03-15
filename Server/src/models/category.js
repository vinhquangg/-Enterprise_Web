const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class category extends Model {
    static associate(db) {
      this.hasMany(db.posts, {
        as: "post",
        foreignKey: "categoryId",
      });
    }
  }

  category.init(
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
      },
    },
    {
      sequelize,
      modelName: "category", // Tên model,
      tableName: "Category", //Tên table
      timestamps: true,
    }
  );
  return category;
};
