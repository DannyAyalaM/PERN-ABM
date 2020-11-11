const controllers = {}

//import model and sequelize
var sequelize = require('../model/database');
var Employee = require('../model/Employee');
var Role = require('../model/Role');
//para migrar por su no tiene tablas
sequelize.sync();


controllers.create = async (req,res) => {
  // data
  const { name, email, address, phone, role } = req.body;
  // create
  const data = await Employee.create({
    name: name,
    email: email,
    address: address,
    phone: phone,
    roleId: role
  })
  .then(function(data){
    return data;
  })
  .catch(error =>{
    console.log("Errorazo "+error)
    return error;
  })
  // return res
  res.status(200).json({
    success: true,
    message:"Guardo exitosamente",
    data: data
  });
}



controllers.delete = async (req, res) => {
  // parameter post
  const { id } = req.body;
  // delete sequelize
  const del = await Employee.destroy({
    where: { id: id}
  })
  res.json({success:true,deleted:del,message:"Eliminado Satisfactoriamente "});
}


controllers.update = async (req,res) => {
  // parameter get id
  const { id } = req.params;
  // parameter POST
  const {name, email, address, phone, role } = req.body;
  // Update data
  const data = await Employee.update({
    name:name,
    email:email,
    address:address,
    phone:phone,
    roleId:role
  },
  {
    where: { id: id}
  })
  .then( function(data){
    return data;
  })
  .catch(error => {
    return error;
  }) 
  res.json({success:true, data:data, message:"Actualizado Satisfactoriamente"});
}


controllers.get = async (req,res) => {
  const { id } = req.params;
  const data = await Employee.findAll({
      where: { id: id },
      include: [ Role ]
  })
  .then(function(data){
    return data;
  })
  .catch(error =>{
    return error;
  })
  res.json({ success: true, data: data });
}

controllers.list = async (req, res) => {

  const data = await Employee.findAll({
    include: [ Role ]
  })
    .then(function(data){
      return data;
    })
    .catch(error => {
      return error;
    }); 
  
    res.json({success : true, data : data});
  
  }

// controllers.testdata = async (req, res) => {
//     const response = await sequelize.sync().then(function(){
//         //create Role
//         Role.create({
//             role: 'Admin'
//         })
//         //create Employee
//         Employee.create({
//             name: 'Marck Vina',
//             email: 'mack@gmail',
//             address: 'Luque',
//             phone: '34534534',
//             roleId: 1
//         })


//         //llamar todos los datos de empleado
//         const data = Employee.findAll();
//         return data;
//     })
//     .catch(error =>{
//         return error;
//     });

//     res.json({success: true, data: response});
// }

controllers.test = (req, res) => {
    const data = {
        name: "Jhon",
        age: 24,
        city: "Madrid"
    }
    console.log("Execute from controllers employee");
    res.json(data);
}

module.exports = controllers;