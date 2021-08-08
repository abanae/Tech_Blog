// Dependencies
const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// create a new  post
router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// getting a single post
router.get('/getpost/:id', withAuth, async (req, res) =>{
    console.log('route hit');
    try {
        const postSingle = await Post.findByPk(req.params.id, {
            include: [{
                model: Comment,
                include: [User]
            }, User]
        });
        if (!postSingle) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }
        const single = postSingle.toJSON();
        res.status(200).render('post',{...single,logged_in: req.session.logged_in});
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete post
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;