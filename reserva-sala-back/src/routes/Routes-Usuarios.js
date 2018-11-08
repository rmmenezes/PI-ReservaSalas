'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controlers/Controller-Usuarios');

router.get('/admin',controller.verifyJWT, controller.get);
router.post('/login', controller.login);
router.post('/', controller.post);
router.delete('/', controller.delete);
router.put('/', controller.put);
router.get('/:nome', controller.getbyName);

module.exports = router;
