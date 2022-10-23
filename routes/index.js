const router = require('express').Router();
const thoughRoutes = require('../routes/api/thoughtRoutes');
const userRoutes = require('../routes/api/userRoutes')

router.use('/Thoughts', thoughRoutes);
router.use('/user', userRoutes);

module.exports = router;
