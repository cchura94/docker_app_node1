const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bd_docker1', 'root', 'root', {
    host: 'bd_mysql',
    dialect: 'mysql',
    port: 3306
});


const testConection = async () => {
    try {
        await sequelize.authenticate();
        console.log('CONEXION CORRECTA.');
      } catch (error) {
        console.error('ERROR DE CONEXION:', error);
      }
}

testConection()

module.exports = sequelize
