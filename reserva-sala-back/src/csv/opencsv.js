'use strict'
var fs = require('fs');
var csv = require('fast-csv');
const mongoose = require('mongoose');
mongoose.connect('mongodb://pi2018:pi2018@ds045077.mlab.com:45077/reservasala');


const reserva = new mongoose.Schema({

    nome: {
        type: String,
        required: true,
        trim: true
    },
    tipo: {
        type: String,
        trim: true
    },
    capacidade: {
        type: Number
    },
    horario: {
        type: String,
        trim: true
    },
    codigoDisciplina: {
        type: String,
        trim: true
    },
    codigoTurma: {
        type: String,
        trim: true
    },
    nomeDisciplina: {
        type: String,
        trim: true
    },
    nomeProfessor: {
        type: String,
        trim: true
    }
   
});

var Reserva = mongoose.model('Reserva', reserva);


const stream = fs.createReadStream('horarios-2018-1.csv');
const streamCsv = csv({
    delimiter: ';'
})
    .on('data', function(data) {
        var reserva = new Reserva({
        
            nome: data[0],
            tipo: data[1],
            capacidade: data[2],
            horario: data[3],
            codigoDisciplina: data[4],
            codigoTurma: data[5],
            nomeDisciplina: data[6],
            nomeProfessor: data[7]


        })
    
        reserva.
        save()
        .then({            
                message: 'cadastrado'
            
        }).catch({
            
                message: 'falha'
                
            
        });
            
        


    });

stream.pipe(streamCsv);




