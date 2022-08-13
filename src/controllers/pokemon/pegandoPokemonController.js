const pegandoPokemonController = async(req, res)=>{
    const db = require("../../connection/db");
    const pokemon = require("../../models/Pokemon");
    await db.sync();
    const listaP = await pokemon.findAll();
    return res.status(200).json({pokemons: listaP})
}

const pegandoPokemonPKController = async(req, res)=>{
    const pokemon = require("../../models/Pokemon");
    const id = req.params.id
    const pokemonPK = await pokemon.findByPk(id)
    return res.status(200).json({pokemon: pokemonPK})
}

module.exports = { pegandoPokemonController, pegandoPokemonPKController};