var connection = require("../config/connection.js");


function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}


function objToSql(ob){
    var arr = [];

    for (var key in ob){
        var value = ob[key];

        //Skipping hidden properties.
        if(Object.hasOwnProperty.call(ob,key)){
            //Adding quotes if string has spaces.
            if(typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}


var orm = {
    selectAll: function (tableInput, cb) {
        console.log("Select All ORM");
        var queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        console.log("Insert One ORM");
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        })

    },
    updateOne: function (table, objColVals, condition, cb) {
        console.log("Update One ORM");
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result){
            if(err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;