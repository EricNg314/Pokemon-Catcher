var orm = require("../config/orm.js");

var poke = {
    selectAll: function (cb) {
        orm.selectAll("pokemon", function (res) {
            cb(res);
        });
    },
    insertOne: function (cols, vals, cb) {
        orm.insertOne("pokemon", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (cb) {
        orm.updateOne(function (res) {
            cb(res);
        });
    }
};

module.exports = poke;