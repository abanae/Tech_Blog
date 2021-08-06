// Dependencies
const router = require('express').Router();
const { User } = require('../../models');

// get all customers route
router.get('/', async (req, res) => {
    try {
        const allUsers = await User.findAll();
        const users = allUsers.map(user => user.toJSON());
        // render to homepage
        res.status(200).render('homepage', { users });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;