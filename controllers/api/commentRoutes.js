// // Dependencies
const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Comment } = require('../../models');


// Getting all comments
// router.post('/', (req, res) => {
// });


// New Comment
router.post('/', withAuth, (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            comment_text: req.body.comment_text,
            post_id: req.body.post_id,
            user_id: req.session.user_id,
        });
        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = router;