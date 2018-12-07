var fs = require('fs');
var moment = require('moment');
var csv = require('fast-csv');
const mongoose = require('mongoose');
mongoose.connect('mongodb://pi2018:pi2018@ds045077.mlab.com:45077/reservasala');

var horario = {
    m1: "07:30",
    m2: "08:20",
    m3: "09:10",
    m4: "10:20",
    m5: "11:10",
    m6: "12:00",
    t1: "13:00",
    t2: "13:50",
    t3: "14:40",
    t4: "15:50",
    t5: "16:40",
    t6: "17:30",
    n1: "18:40",
    n2: "19:30",
    n3: "20:20",
    n4: "21:20",
    n5: "22:10"
}

const reservaSala = new mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    start: {
        type: Date,
        trim: true
    },
    end: {
        type: Date,
        trim: true
    },
    reserva: {

        nomeSala: {
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
    }

});

var Reserva = mongoose.model('reservasala', reservaSala);

var dataInicial = new Date(2018, 07, 06, 07, 30, 00, 000);
console.log("datainicial: " +  dataInicial);
var dataFinal = new Date(2018, 11, 14, 07, 30, 00, 000);



const stream = fs.createReadStream('horarios-2018-1.csv');
const streamCsv = csv({
    delimiter: ';'
})
    .on('data', function (data) {
        var datait = dataInicial;
        var dia = data[3].split("")[0];
        switch (dia) {
            case "3":
                datait = moment(datait).add(1, "d").toDate();
                break;
            case "4":
                datait = moment(datait).add(2, "d").toDate();
                break;
            case "5":
                datait = moment(datait).add(3, "d").toDate();
                break;
            case "6":
                datait = moment(datait).add(4, "d").toDate();
                break;

        }

        var hora = data[3].split("")[1] + data[3].split("")[2];
        
        switch (hora) {
            case "m1":
                hora = horario.m1;
                 break;
            case "m2":
                hora = horario.m2;
                break;
            case "m3":
                hora = horario.m3;
                break;
            case "m4":
                hora = horario.m4;
                break;
            case "m5":
                hora = horario.m5;
                break;
        }
        var i = 0;
        
        
        while (datait < dataFinal) {
            console.log("DAATAA ITERATOR: " + datait);
            datait = moment(datait).set({'hours': hora.split(":")[0], 'minute': hora.split(":")[1]}).toDate();
            var re = new Reserva({
                title: data[6],
                start: datait, 
                end: moment(datait).add(50,"m").toDate(),

                reserva: {
                    nomeSala: data[0],
                    tipo: data[1],
                    capacidade: data[2],
                    horario: data[3],
                    codigoDisciplina: data[4],
                    codigoTurma: data[5],
                    nomeDisciplina: data[6],
                    nomeProfessor: data[7]
                }

            })
            console.log(re);
            console.log("-----------------------------------------------------")
            datait = moment(datait).add(1,"w").toDate()
         
            re.
               save()
                    .then({
                       message: 'cadastrado'
                    }).catch({
                       message: 'falha'
                    });
        }

    });

stream.pipe(streamCsv);




