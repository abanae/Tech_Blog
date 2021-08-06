const { User } = require('../models');

const userData = [
    {
        username: 'Sassy',
        email: 'sassy@email.com',
        password: 'sassy123',
    },
    {
        username: 'Saul',
        email: 'saul@email.com',
        password: 'saul1234',
    },
    {
        username: 'Sam',
        email: 'sam@email.com',
        password: 'sam12345',
    }, {
        username: 'Sandie',
        email: 'sandie@email.com',
        password: 'sandie12',
    },
    {
        username: 'Seth',
        email: 'seth@email.com',
        password: 'seth1234',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;