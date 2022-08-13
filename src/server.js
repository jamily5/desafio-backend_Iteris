require('dotenv/config')
const express = require("express");
const app = express();
const port = 3050;

app.use(express.json());

app.listen(port, function(){
    console.log(`Servidor na porta: ${port} `)
})