const router = require('express').Router();
const thoughtRoutes = require('../routes/api/thoughtRoutes');
const userRoutes = require('../routes/api/userRoutes')

router.use('/Thoughts', thoughtRoutes);
router.use('/user', userRoutes);

module.exports = router;
