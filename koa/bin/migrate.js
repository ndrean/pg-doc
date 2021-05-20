const { sequelize } = require("../database.js");

sequelize.sync().then(() => {
  console.log("New table created");
});
