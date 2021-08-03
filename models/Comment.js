// import important parts of sequelize library
const { Model, Datatypes, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Comment model (table) by extending off Sequelize's Model class
class Comment extends Model { }
// Set up fields and rules for Comment model
Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },    
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
            model: 'post',
            key: 'id'
            }    
        },
        user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
        model: 'user',
        key: 'id'
        }
    }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;