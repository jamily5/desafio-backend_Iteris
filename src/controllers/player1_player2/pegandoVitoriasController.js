const pegandoVitoriasController = async(req, res)=>{
    const player1_player2 = require("../../models/Player1_Player2");
    var playerOneV = await player1_player2.count({
        where: {
            winnerPlayer: "PlayerOne"
        }
    })
    var playerTwoV = await player1_player2.count({
        where: {
            winnerPlayer: "PlayerTwo"
        }
    })
    //console.log(playerOneV, playerTwoV)
    
    return res.json({playerOne: playerOneV, playerTwo: playerTwoV})
}

module.exports = pegandoVitoriasController;