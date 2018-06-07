var express = require("express");
var router = express.Router();

var poke = require("../models/pokemon.js");

router.get("/", function (req, res) {
    poke.selectAll(function(data){
        var hbsObj = {
            pokemon: data
        };
        // console.log("Getting all objects", hbsObj);
        res.render("index", hbsObj);
        // res.render("index");
    });
    
});

router.post("/api/pokemon", function (req, res) {
    //Used for randomizing pokemon.
    var randomId = (Math.floor(Math.random()*750)+1);
    var pokemon_url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + randomId + ".png"

    poke.insertOne(["pokemon_id", "pokemon_name", "pokemon_nickName",  "pokemon_front_sprite_url"], [randomId, req.body.nickName, req.body.nickName, pokemon_url], function(result){
        res.json({id: result.insertId});
    });
    
});


module.exports = router;