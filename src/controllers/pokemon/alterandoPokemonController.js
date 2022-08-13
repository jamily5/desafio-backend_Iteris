const alterandoPokemonController = async(req, res)=>{
    const pokemon = require("../../models/Pokemon");
    const id = req.params.id;
    const { nome, hp, attack, defense, special_attack, special_defense, speed} = req.body
    const findPokemon = await pokemon.findByPk(id);
    await pokemon.update({
        nome: nome || findPokemon.nome,
        hp: hp || findPokemon.hp,
        attack: attack || findPokemon.attack,
        defense: defense || findPokemon.defense,
        special_attack: special_attack || findPokemon.special_attack,
        special_defense: special_defense || findPokemon.special_defense,
        speed: speed || findPokemon.speed
    }, {where: {id: id}});
    const newPokemon = await pokemon.findByPk(id);
    return res.json({newPokemon: newPokemon})
}

module.exports = alterandoPokemonController;