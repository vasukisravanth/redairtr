const express =require('express');
const router = express.Router();

console.log('router loaded');
router.get('/',);

router.use('/flight', require('./flight'));
router.use('/passenger', require('./passenger'));
router.use('/user', require('./user'));
router.use('/reservation', require('./reservation'));
router.use('/city', require('./city'));
router.use('/reservation',require('./reservation'));

module.exports = router;