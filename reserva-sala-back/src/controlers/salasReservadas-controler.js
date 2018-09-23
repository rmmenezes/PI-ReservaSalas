'use strict'

const mongoose = require('mongoose');
const Sala = mongoose.model('Sala');

exports.post = (req, res, next) => {
    var sala =  new Sala(req.body);
    
    sala
    .save()
    .then(x => {
        res.status(201).send({
            message: 'cadastrado'
        });
    }).catch(e => {
        res.status(400).send({
            message: 'falha',
            data: e
        });
    });
    
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
};


exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};