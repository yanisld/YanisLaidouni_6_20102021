const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

router.get('/', auth);
router.post('/', auth);
router.get('/:id', auth);
router.put('/:id');
router.delete('/:id');

module.exports = router;