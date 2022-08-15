const Sequelize = require("sequelize");
const db = require("../connection/db");

const Player1_Player2 = db.define("playerVSplayer", {
    idDuelo: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    winnerPlayer: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
    },
    winner: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true
    },
    loser: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true
    },
    hp: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true
    },
    attack: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true
    },
    defense: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true
    },
    special_attack: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true
    },
    special_defense: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true
    },
    speed: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true
    }

});


module.exports = Player1_Player2