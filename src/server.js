require('dotenv/config')
const express = require("express");
const pokemonRoute = require("./routes/pokemon.routes");
const app = express();
const port = 3040;

app.use(express.json());
app.use(pokemonRoute);


app.listen(port, function(){
    console.log(`Servidor na porta: ${port} `)
})