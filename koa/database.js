const Sequelize = require("sequelize");
const { database, username, password, host, port } = require("./connection");

const sequelize = new Sequelize({
  database,
  username,
  password,
  host,
  port,
  dialect: "postgres",
  operatorsAliases: 0,
  logging: console.log,
  define: { timestamps: false },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("PG-Node connection established");
  })
  .catch((err) => console.error(err));

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
