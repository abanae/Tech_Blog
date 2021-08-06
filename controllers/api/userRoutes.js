// Dependencies
const router = require('express').Router();
const { Comment, Post ,User } = require('../../models');

// get all customers route
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password'] }
            });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;