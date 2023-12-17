const express = require('express');
const multer = require('multer');
const path = require('path');
const { getProductAdmin, postProductAdmin } = require('../controllers/admin/adminController.js');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
       const uploadsPath = path.join(__dirname, '../public/uploads');
       console.log('Uploads Path:', uploadsPath);
       cb(null, uploadsPath);
    },
    filename: function (req, file, cb) {
       const filename = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
       console.log('Filename:', filename);
       cb(null, filename);
    }
 });


// Initialize Multer with the storage configuration
const upload = multer({ storage: storage });

// Routes
router.get('/add', getProductAdmin);
router.post('/add', upload.single('image'), postProductAdmin);

module.exports = router;
