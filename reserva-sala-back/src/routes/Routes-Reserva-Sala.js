'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controlers/Controller-Reservas-Salas');

router.get('/', controller.listarEventos);
router.post('/', controller.reservar);

module.exports = router;
