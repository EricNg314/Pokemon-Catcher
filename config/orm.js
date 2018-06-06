var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, cb){
        console.log("Select All ORM");
        
    },
    insertOne: function(){
        console.log("Insert One ORM");
  
    },
    updateOne: function(){
        console.log("Update One ORM");
    },
}

module.exports = orm;