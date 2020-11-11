const Sequelize = require('sequelize');
var sequelize = require('./database');

var nametable = "role";  //nombre de la tabla
 
var Role = sequelize.define(nametable, {
    role: Sequelize.STRING

},
{
    //remove createdAt y updated
    timeStamps: false
}
);

module.exports = Role;