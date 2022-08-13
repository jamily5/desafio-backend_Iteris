const Sequelize = require('sequelize');
const db = require('../connection/db');

const Pokemon = db.define('pokemons', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    hp: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    attack: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    defense: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    special_attack: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    special_defense: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    speed: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    }
})


module.exports = Pokemon;