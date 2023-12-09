const express = require('express');
const { getProductAdmin, postProductAdmin } = require('../controllers/admin/adminController.js');
const router = express.Router();




router.get('/add',getProductAdmin);

router.post('/add', postProductAdmin);

module.exports = router;
