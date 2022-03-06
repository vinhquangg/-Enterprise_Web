const { Model, DataTypes, Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");
const { nanoid } = require("nanoid");

module.exports = (sequelize) => {
  class User extends Model {}

  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "name", //key to access the database
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false, //don't allow null
        unique: true, // don't allow duplicated
        validate: {
          isEmail: {
            msg: "Email invalidate",
          },
        },
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
        set(value) {
          if (!value) {
            value = nanoid();
          }

          const salt = bcrypt.genSaltSync();
          const hash = bcrypt.hashSync(value, salt);
          this.setDataValue("password", hash);
        },
      },
      departmentId: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "departmentId",
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: "Staff",
      },
    },
    {
      sequelize,
      modelName: "User", // model name,
      tableName: "users",
      timestamps: false,
    }
  );

  return User;
};
