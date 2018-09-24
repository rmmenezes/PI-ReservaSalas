var fs = require('fs');
var parse = require('csv-parse');


var csvData=[];
fs.createReadStream("../csv/aa.csv")
    .pipe(parse({delimiter: ';'}))
    .on('data', function(csvrow) {
       //console.log(csvrow[0]);
        //do something with csvrow
        var obj = {nome: csvrow[0],tipo: csvrow[1],capacidade: csvrow[2],horario: csvrow[3],materia: csvrow[4],turma: csvrow[5],nomemat: csvrow[6],prof: csvrow[7]};
        csvData.push(obj);        
    })
    .on('end',function() {
      //do something wiht csvData
      console.log(csvData[1]);
       });
