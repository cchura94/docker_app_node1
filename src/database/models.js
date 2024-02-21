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

const Categoria = sequelize.define("Categoria", {
  // Model attributes are defined here
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  detalle: {
    type: DataTypes.STRING,
  }
});

User.sync()
Categoria.sync()

module.exports = {
    User,
    Categoria
    
}