const inserindoPlayer1e2Controller = async(req,res)=>{
    let db = require("../../connection/db");
    let player1_player2 = require("../../models/Player1_Player2");
    let pokemon = require("../../models/Pokemon");
    await db.sync()
    const { playerTwoCard, playerOneCard } = req.body;
    //console.log(playerOneCard, playerTwoCard)
    const findPlayer1 = await pokemon.findByPk(playerOneCard);    
    const findPlayer2 = await pokemon.findByPk(playerTwoCard); 
    var idPlayer1 = findPlayer1.id
    var idPlayer2 = findPlayer2.id
    var hpPlayer1 = findPlayer1.hp
    var hpPlayer2 = findPlayer2.hp
    var attackPlayer1 = findPlayer1.attack
    var attackPlayer2 = findPlayer2.attack
    var defensePlayer1 = findPlayer1.defense
    var defensePlayer2 = findPlayer2.defense
    var s_aPlayer1 = findPlayer1.special_attack
    var s_aPlayer2 = findPlayer2.special_attack
    var s_dPlayer1 = findPlayer1.special_defense
    var s_dPlayer2 = findPlayer2.special_defense
    var speedPlayer1 = findPlayer1.speed
    var speedPlayer2 = findPlayer2.speed
    var player1 = 0
    var player2 = 0
    function condicaoAtributos(a,b){
        if(a < b){
            return idPlayer1 
        } else if(a == b){
            return 0
        } else {
            return idPlayer2
        }
    }

    function condicaoWinner(a, b){
        if(a < b){
            return idPlayer1
        } else if(b == a){
            return res.json({message: "Empate"})
        } else {
            return idPlayer2
        }
    }

    function comparePlayer1(a, b){
        if(a == b){
            return player1 = 1
        } else {
            return 0
        }
    }
    function comparePlayer2(a, b){
        if(a == b){
            return player2 = 1
        } else {
            return 0
        }
    }

    function condicaoAtributosP1(a,b){
        if(a < b){
            return player1 = 1 
        } else {
            return 0
        }
    }
    function condicaoAtributosP2(a,b){
        if(a > b){
            return player2 = 1 
        } else {
            return 0
        }
    }


    const soma1 = await comparePlayer1(condicaoAtributosP1(hpPlayer2, hpPlayer1), player1) + 
    comparePlayer1((condicaoAtributosP1(attackPlayer2, attackPlayer1)), player1) +
    comparePlayer1((condicaoAtributosP1(defensePlayer2, defensePlayer1)), player1) +
    comparePlayer1((condicaoAtributosP1(s_aPlayer2, s_aPlayer1)), player1) +
    comparePlayer1((condicaoAtributosP1(s_dPlayer2, s_dPlayer1)), player1) +
    comparePlayer1((condicaoAtributosP1(speedPlayer2, speedPlayer1), player1))
    //console.log(soma1)
    const soma2 = await comparePlayer2(condicaoAtributosP2(hpPlayer2, hpPlayer1), player2) + 
    comparePlayer2(condicaoAtributosP2(attackPlayer2, attackPlayer1), player2) +
    comparePlayer2(condicaoAtributosP2(defensePlayer2, defensePlayer1), player2) +
    comparePlayer2(condicaoAtributosP2(s_aPlayer2, s_aPlayer1), player2) +
    comparePlayer2(condicaoAtributosP2(s_dPlayer2, s_dPlayer1), player2) +
    comparePlayer2(condicaoAtributosP2(speedPlayer2, speedPlayer1), player2)
    //console.log(soma2)

    function winnerP(a, b){
        if(a == b){
            return "PlayerOne"
        } else {
            return "PlayerTwo"
        }
    }


    const duelo = await player1_player2.create({
      winnerPlayer: winnerP(idPlayer1, condicaoWinner(soma2, soma1)),
      winner: condicaoWinner(soma2, soma1), 
      loser: condicaoWinner(soma1, soma2),
      hp: condicaoAtributos(hpPlayer2, hpPlayer1),
      attack: condicaoAtributos(attackPlayer2, attackPlayer1),
      defense: condicaoAtributos(defensePlayer2, defensePlayer1),
      special_attack: condicaoAtributos(s_aPlayer2, s_aPlayer1),
      special_defense: condicaoAtributos(s_dPlayer2, s_dPlayer1),
      speed: condicaoAtributos(speedPlayer2, speedPlayer1)

    });

    return res.json({duelo: duelo });
}

module.exports = inserindoPlayer1e2Controller;