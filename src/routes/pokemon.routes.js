const express = require("express");
const pokemonRoute = express.Router();

const criandoPokemonController = require("../controllers/pokemon/criandoPokemonController");
const { pegandoPokemonController, pegandoPokemonPKController } = require("../controllers/pokemon/pegandoPokemonController");
const alterandoPokemonController = require("../controllers/pokemon/alterandoPokemonController");
const deletandoPokemonController = require("../controllers/pokemon/deletandoPokemonController");

pokemonRoute.post("/pokemon", criandoPokemonController);

pokemonRoute.get("/pokemon", pegandoPokemonController);
pokemonRoute.get("/pokemon/:id", pegandoPokemonPKController);

pokemonRoute.put("/pokemon/:id", alterandoPokemonController)

pokemonRoute.delete("/pokemon/:id", deletandoPokemonController);

module.exports = pokemonRoute;