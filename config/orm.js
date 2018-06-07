var connection = require("../config/connection.js");

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

    },
    updateOne: function (table, objColVals, condition, cb) {
        console.log("Update One ORM");
    },
}

module.exports = orm;