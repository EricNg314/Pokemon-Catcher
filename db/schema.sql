DROP DATABASE IF EXISTS pokemon_db;
CREATE DATABASE pokemon_db;

USE pokemon_db;

CREATE TABLE pokemon
(
    id INT NOT NULL AUTO_INCREMENT,
    pokemon_id INT NOT NULL,
    pokemon_name VARCHAR(60),
    pokemon_nickName VARCHAR(255),
    pokemon_front_sprite_url VARCHAR(255) NOT NULL,
    appeared BOOLEAN DEFAULT false,
    caught BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
)
