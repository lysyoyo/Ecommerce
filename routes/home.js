const express = require('express');
const { getHomePage } = require('../controllers/home/homeController');
const router = express.Router();



router.get('/', getHomePage);

module.exports = router;
