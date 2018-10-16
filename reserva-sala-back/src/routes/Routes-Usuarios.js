'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controlers/Controller-Usuarios');

router.get('/', controller.get);
router.get('/:email/:senha', controller.login);
router.post('/', controller.post);
router.delete('/', controller.delete);

module.exports = router;
