const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Department extends Model {
    static associate(db) {
      this.hasMany(db.User, {
        as: "user",
        foreignKey: "departmentId",
      });
    }
  }

  Department.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "name", //key to access the database
      },
    },
    {
      sequelize,
      modelName: "Department", // model name,
      tableName: "departments",
      timestamps: false,
    }
  );

  return Department;
};
