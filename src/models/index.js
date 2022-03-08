const fs = require("fs");
const path = require("path");
const { Sequelize } = require("sequelize");
const config = require("../config");

const sequelize = new Sequelize(
  config.db_name,
  config.db_user,
  config.db_password,
  {
    host: config.db_host,
    dialect: config.db_dialect,
    port: config.db_port,
  }
);

const db = {};

const basename = path.basename(__filename);
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file.slice(-3) === ".js" && file !== basename
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize);
    db[model.name] = model;
  });

Object.keys(db).forEach((model) => {
  // Nếu bên trong model có định nghĩa các mối quan hệ
  if (db[model].associate) {
    db[model].associate(db);
  }
});

// Tự động sync dữ liệu giữa model và table trong db
sequelize.sync({ alter: true });

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
