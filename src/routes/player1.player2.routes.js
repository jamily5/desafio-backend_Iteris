const express = require("express");
const player1_player2Route = express.Router();

const inserindoPlayer1e2Controller = require("../controllers/player1_player2/inserindoPlayer1e2Controller");
const pegandoPlayersController = require("../controllers/player1_player2/pegandoPlayersController");
const pegandoVitoriasController = require("../controllers/player1_player2/pegandoVitoriasController");

player1_player2Route.post("/duelo", inserindoPlayer1e2Controller);

player1_player2Route.get("/duelo", pegandoPlayersController);

player1_player2Route.get("/vitoria", pegandoVitoriasController);

module.exports = player1_player2Route;