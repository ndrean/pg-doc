const Sequelize = require("sequelize");
const connection = require("./connection");

const sequelize = new Sequelize({
  database: connection.database,
  username: connection.user,
  password: connection.password,
  host: connection.host,
  port: connection.port,
  dialect: "postgres",
  operatorsAliases: false,
  logging: true,
  define: { timestamps: false },
});

const Request = sequelize.define("requests", {
  // id: {
  //   type: Sequelize.DataTypes.INTEGER,
  //   primaryKey: true,
  //   autoOncrement: true,
  // },
  app: { type: Sequelize.DataTypes.STRING, allowNull: false },
  url: { type: Sequelize.DataTypes.STRING },
  host: { type: Sequelize.DataTypes.STRING, allowNull: false },
  ip: { type: Sequelize.DataTypes.STRING, allowNull: false },
  req_at: { type: Sequelize.DataTypes.STRING, allowNull: false },
  d: { type: Sequelize.DataTypes.BIGINT },
});

module.exports = {
  sequelize,
  Request,
};
