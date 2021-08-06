// Dependencies
const router = require('express').Router();
// const sequelize = require('../config/connection');
const { Comment, Post, User } = require('../models');

// Getting all Posts
router.get('/', async (req, res) => {
    try {
        const allPosts = await Post.findAll({ 
            include:[Comment,{ model: User} ],
        });
        const posts = allPosts.map(post => post.toJSON());
        const allUsers = await User.findAll();
        const users = allUsers.map(user => user.toJSON());
        res.render("homepage", {posts, users});
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;