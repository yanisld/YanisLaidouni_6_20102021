const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const sauceCtrl = require("../controllers/sauce");

router.get('/', auth);
router.post('/', auth, multer, sauceCtrl.createSauce);
router.get('/:id', auth);
router.put('/:id', auth, multer);
router.delete('/:id', auth);

module.exports = router;