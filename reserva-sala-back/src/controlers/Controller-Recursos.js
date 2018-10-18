'use strict'

const mongoose = require('mongoose');
const Recurso = mongoose.model('Recurso');

exports.getAll = (req, res, next) => {
    Recurso.find({})
        .then(data => {
            res.status(201).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};
exports.post = (req, res, next) => {
    var recurso = new Recurso(req.body);

    recurso
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
    recurso
        .findByIdAndUpdate(req.params.id, {
            $set: {
                patrimonio: req.body.patrimonio,
                nome: req.body.nome,
                marca: req.body.marca,
                modelo: req.body.modelo,
                quantidade: req.body.quantidade,
                desc: req.body.desc
            }
        }).then(x => {
            res.status(201).send({
                message: 'Recurso atualizado com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar recurso!'
                data: e
            });
        });
    
};


exports.delete = (req, res, next) => {
    Recurso.findOneAndRemove(
        req.body.id
    )
        .then(data => {
            res.status(201).send({
                message: 'recurso removido com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao remover recurso',
                data: e
            });
        });
   
};

