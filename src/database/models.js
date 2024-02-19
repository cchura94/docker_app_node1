const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./conexion");

const User = sequelize.define("User", {
  // Model attributes are defined here
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

User.sync()

module.exports = {
    User,
    
}