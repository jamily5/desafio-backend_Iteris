require('dotenv/config')
const express = require("express");
const pokemonRoute = require("./routes/pokemon.routes");
const player1_player2Route = require("./routes/player1.player2.routes");
const app = express();
const port = 3040;

app.use(express.json());
app.use(pokemonRoute);
app.use(player1_player2Route);

app.listen(port, function(){
    console.log(`Servidor na porta: ${port} `)
})