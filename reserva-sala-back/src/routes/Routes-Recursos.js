'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controlers/Controller-Recursos');


router.get('/', controller.getAll);
router.get('/:nome', controller.getbyName);
router.post('/', controller.post);
router.delete('/',controller.delete);


module.exports = router;