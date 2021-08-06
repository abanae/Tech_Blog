// Dependencies
const router = require('express').Router();
// const sequelize = require('../config/connection');
const { Comment, Post, User } = require('../models');

// Getting all Posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll({ 
            include:[Comment,{ model: User} ],
        });
        const tempArr = [
            {
                title: 'whatever',
            },
            {
                title: 'something else',
            }
        ];
        res.render("homepage", {tempArr});
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;