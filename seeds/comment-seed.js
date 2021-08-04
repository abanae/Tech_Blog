const { Comment } = require('../models');

const commentData = [
    {
        comment_text:'That is very useful to know',
        post_id: 1,
        user_id: 3,
    },
    {
        comment_text:'Great to know, thank you',
        post_id: 2,
        user_id: 5,
    },
    {
        comment_text:'Very useful!',
        post_id: 3,
        user_id: 4,
    },
    {
        comment_text:'Would make sure to keep that in mind',
        post_id: 4,
        user_id: 2,
    },
    {
        comment_text:'Thank you for the tip!',
        post_id: 5,
        user_id: 1,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;