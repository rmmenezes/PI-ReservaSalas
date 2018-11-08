'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controlers/Controller-Recursos');


router.get('/admin', controller.getAll);
router.get('/reservas', controller.getAllReservas);
router.post('/', controller.post);
router.delete('/',controller.delete);
router.put('/', controller.put);
router.get('/:nome', controller.getbyName);


module.exports = router;