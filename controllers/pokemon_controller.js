var express = require("express");
var router = express.Router();

var poke = require("../models/pokemon.js");

router.get("/", function (req, res) {
    // poke.selectAll(function(data){
    //     var hbsObj = {
    //         pokemon: data
    //     };
    //     console.log("Getting all objects", hbsObj);
    //     res.render("index", hbsObj);
    // });
    res.render("index");
});


module.exports = router;