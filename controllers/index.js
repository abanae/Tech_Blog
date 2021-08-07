// Server Connection
const router = require('express').Router();
const apiRoutes = require('./api');
const homepageRoutes = require('./homepage-routes.js');
// const dashboardRoutes = require('./dashboard-routes.js');

// Define path for the server for the API routes
router.use('/', homepageRoutes);
router.use('/api', apiRoutes);
// router.use('/dashboard', dashboardRoutes);

// router.use((req, res) => {
//     res.status(404).end();
// });


module.exports = router;