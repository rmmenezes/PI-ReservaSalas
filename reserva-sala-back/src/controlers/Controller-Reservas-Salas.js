'use strict'

const mongoose = require('mongoose');
const Reserva = mongoose.model('reservasalas');

exports.listarEventos = (req, res, next) => {
    Reserva.find({})
        .then(data => {
            res.status(201).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.reservar = (req, res, next) => {
    var reserva = new Reserva(req.body);
    reserva
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
