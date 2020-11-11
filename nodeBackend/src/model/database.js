var Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'library', //database,
    'postgres', //usuario,
    'admin', //password
    {
        host: 'localhost',
        dialect: 'postgresql'
    }
);

module.exports = sequelize;