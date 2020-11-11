const Sequelize = require('sequelize');
var sequelize = require('./database');

var Role = require('./Role');
var nametable = 'empleado';

var Employee = sequelize.define(nametable, {
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        address: Sequelize.STRING,
        phone: Sequelize.STRING,
    //llave foranea
    roleId:{
        type: Sequelize.INTEGER,
        //this is a reference to anoter model
        references: {
            model: Role,
            key: 'id'
        }
    }
    
});

Employee.belongsTo(Role);

module.exports = Employee;