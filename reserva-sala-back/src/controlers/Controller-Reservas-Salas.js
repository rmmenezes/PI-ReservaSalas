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
    Reserva.find({
        title: req.body.title
    }).then(e => {
        if(e[0]){
            console.log('Ja existe')
            return 'existe'
        }
        else{
            kd = 656* d
        }
        console.log(e)
        res.status(400).send({
            message: 'falha',
            data: e
        });
    }).catch(x => {
        console.log('entrou no cat')
        var reserva = new Reserva(req.body);
        reserva.save()
    })
};
