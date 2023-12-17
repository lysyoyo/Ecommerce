const express = require('express');
const { getHomePage, getProductId } = require('../controllers/home/homeController');
const router = express.Router();



router.get('/', getHomePage);
router.get('/product/details/:productId', getProductId)

module.exports = router;
