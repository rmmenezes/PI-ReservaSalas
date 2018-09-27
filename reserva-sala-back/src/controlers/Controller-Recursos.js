'use strict'

const mongoose = require('mongoose');
const Recurso = mongoose.model('Recurso');

exports.get = (req, res, next) => {
    Recurso.find({})
        .then(data => {
            res.status(201).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};