const Sequelize = require('sequelize');
const sequelize = require('../util/database');



const activity = sequelize.define('activity',{
    
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull:false,
        // primaryKey:true,
        

    },
    activity: {
        type:Sequelize.STRING,
        allowNull:false
    },
    sem: {
        type:Sequelize.STRING

    },
    // name: {
    //     type:Sequelize.STRING,
    //     allowNull:false
    // },
    prize: {
        type:Sequelize.STRING,
        allowNull:false
    },
    level: {
        type:Sequelize.STRING,
        allowNull:false

    },
    // image: {
    //     type:Sequelize.STRING,
    
    // }
});

module.exports=activity;