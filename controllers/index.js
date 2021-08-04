// Server Connection
const router = require('express').Router();
const apiRoutes = require('./api');
const homepageRoutes = require('./homepageRoutes.js');
const dashboardRoutes = require('./dashboardRoutes.js');

// Define path for the server for the API routes
router.use('/api', apiRoutes);
router.use('/homepage', homepageRoutes);
router.use('/dashboard', dashboardRoutes);

router.use((req, res) => {
    res.status(404).end();
});


module.exports = router;