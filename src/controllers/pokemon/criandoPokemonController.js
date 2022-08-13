const criandoPokemonController = async (req, res) => {
    const db = require("../../connection/db");
    const pokemon = require("../../models/Pokemon");
    await db.sync();
    const { nome, hp, attack, defense, special_attack, special_defense, speed } = req.body
    const newPokemon = await pokemon.create({
        nome, hp, attack, defense, special_attack, special_defense, speed
    });
    return res.json({pokemon: newPokemon})
}

module.exports = criandoPokemonController;