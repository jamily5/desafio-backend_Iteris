const pegandoPlayersController = async(req, res)=>{
    const db = require("../../connection/db");
    const player1_player2 = require("../../models/Player1_Player2");
    await db.sync();
    const listaD = await player1_player2.findAll();
    return res.status(200).json({duelos: listaD})
}

module.exports = pegandoPlayersController;