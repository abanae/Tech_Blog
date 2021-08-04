const {Post} = require('../models');

const postData = [
    {
        title: 'Why MVC is so important',
        post_text: 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Crontroller layer for application logic.',
        user_id: 5,
    },
    {
        title: 'Authentication vs. Authorization',
        post_text: 'There is a difference between authentication & authorization. Authentication means confirming your own identity, whereas authorization means being allowed accedd to the system.', 
        user_id: 1,
    },
    {
        title: 'Object-Relational Mapping',
        post_text: 'I have really loved learning about ORMs. It is really simplified the wasy I create queries in SQL.',
        user_id: 2, 
    },
    {
        title: 'Why is Node.js single-threaded',
        post_text: 'Node.js was created explicitly as an experiment in async processing. This was to try a new theory of doing async processing on a single thread over the existing thread-based implementation of scaling via different frameworks.',
        user_id: 3, 
    },
    {
        title: 'Tools that can be used to assure consistent code style',
        post_text: 'ESLint can be used with any IDE to ensure a consistent coding style which further helps in maintaining the codebase. ',
        user_id: 4,
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;