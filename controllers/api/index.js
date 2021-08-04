// Server connection
const router = require('express').Router();
const commentRoutes= require('./commentRoutes');
const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');

// Define route path for the server for the API routes
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);
router.use('/users', userRoutes);




module.exports = router;