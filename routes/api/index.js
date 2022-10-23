const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughRoutes = require('./thoughtRoutes');

router.use('/useRoutes', userRoutes);
router.use('/thoughtRoutes', thoughRoutes);

module.exports = router;
