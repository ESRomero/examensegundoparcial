var ObjectID = require('mongodb').ObjectID;

function employeeModel(db){
  var lib = {};
  var empColl = db.collection('employees');

  lib.getEmployees = (handler)=>{
    empColl.find({}).toArray(handler);
  }

  lib.getEmployeesById = (id, handler) => {
    var query = { "_id": new ObjectID(id) };
    var projection = { "email": 1, "phone": 1, "name":1,"age":1};
    empColl.findOne(
      query,
      {"projection":projection},
      (err, employee)=>{
        if(err){
          return handler(err,null);
        }
        return handler(null, employee);
      }
    )
  }

  lib.getEmployeesByCompany = (company, handler) => {
    var query = {"company":company};
    var projection = { "name": 1, "email": 1, "company":1};
    empColl.find(
      query,
      {"projection":projection}).toArray(
      (err, employees)=>{
        if(err){
          return handler(err,null);
        }
        return handler(null, employees);
      }
    )
  }

  lib.getEmployeesByTag = (tag, handler) => {
    //implementar
    // obtener todos los documentos que contenga 
    // al menos una vez el tag dentro del arreglo
    // tags
    // mostrar solo name, email, tags
    return handler(new Error("No Implementado"), null);
  }

  lib.addEmployeeATag = ( tag, id, handler) => {
    //Implementar
    //Se requiere agregar a un documento un nuevo tag
    // $push
    return handler(new Error("No Implementado"), null);
  }

  lib.removeEmployee = (id, handler) => {
    //Implementar
    //Se requiere eliminar un documento de la colección
    return handler(new Error("No Implementado"), null);
  }

  lib.increaseAgeToAll = (ageDelta, handler) => {
    //Implementar
    //Se requiere modificar todos los documentos de la colección
    // incrementando age por la cantidad de ageDelta $inc
    return handler(new Error("No Implementado"), null);
  }
  return lib;
}

module.exports = employeeModel;
