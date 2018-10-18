'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controlers/Controller-Usuarios');

router.get('/admin', controller.get);
router.get('/:nome', controller.getbyName);
router.get('/:email/:senha', controller.login);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;
