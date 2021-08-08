// // Dependencies
const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Comment} = require('../../models');

// Getting all Comments
router.get('/', async (req, res) => { 
    try {
        const commentData = await Comment.findAll();
        const comments = commentData.map(comment => comment.toJSON());
        // render to homepage
        res.status(200).render('homepage', { comments });
        } catch (err) {
        res.status(500).json(err);
        }
});

// New Comment
router.post('/', withAuth, async (req, res) => {
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

//update existing comment
router.put('/:id', withAuth, async (req, res) => {
    try {
        if (req.session) {
            const updateComment = await Comment.update(
                {
                    user_id: req.session.user_id,
                    comment_text: req.body.comment_text,
                },
                {
                    where: {
                        id: req.params.id,
                    },
                });
                if (!updateComment[0]) {
                    res.status(404).json({ message: 'No comment found with this id!' });
                    return;
                }
                res.status(200).json(updateComment);
        }
    } catch (e) {
        console.log(e);
        res.status(500).json(e);

    }
});

// Delete Comment
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!commentData) {
            res.status(404).json({ message: 'No comment found for this user!' });
            return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;