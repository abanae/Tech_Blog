// import important parts of sequelize library
const { Model, Datatypes, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// Initialize Comment model (table) by extending off Sequelize's Model class
class User extends Model {
    checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
}};
// Set up fields and rules for User model
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
                isAlphanumeric: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        }
    },
    {
        hooks: {
            // set up beforeCreate hook 
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            // set up beforeUpdate hook
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);
module.exports = User;