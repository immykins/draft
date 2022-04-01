const express = require('express');
const router = express.Router();
const draftController = require('./drafts.controller');

router.post('/', draftController.create);

// router.get('/:id', draftController.get);

module.exports = router