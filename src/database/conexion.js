const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bd_docker1', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
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
