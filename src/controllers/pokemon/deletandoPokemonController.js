const deletandoPokemonController = async(req, res)=>{
    const pokemon = require("../../models/Pokemon");
    const id = req.params.id;
    const poke = await pokemon.findByPk(id);
    await pokemon.destroy({
        where: {
            id: id
        }
    })
    return res.json({message: "Pokémon deletado com sucesso!", pokemon: poke})
}

module.exports = deletandoPokemonController;