const router = require('express').Router();
const thoughRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes')

router.use('/Thoughts', thoughRoutes);
router.use('/user', userRoutes);

module.exports = router;
