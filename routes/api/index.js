const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/reaction', userRoutes);
router.use('/Thoughts', thoughtRoutes);

module.exports = router;
