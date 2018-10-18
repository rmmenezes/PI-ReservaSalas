'use strict'

const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

exports.get = (req, res, next) => {
    Usuario
        .find({
           active: true 
        }, 'nome email departamento')
        .then(data => {
            res.status(201).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.post = (req, res, next) => {
    var usuario = new Usuario(req.body);

    usuario
        .save()
        .then(x => {
            res.status(201).send({
                message: 'usuário cadastrado com sucesso'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'falha ao cadastrar usuário',
                data: e
            });
        });

};

exports.put = (req, res, next) => {
    usuario
        .findByIdAndUpdate(req.params.id, {
            $set: {
                nome: req.body.nome,
                email: req.body.email,
                departamento: req.body.departamento,
                senha1: req.body.senha1,
                senha2: req.body.senha2
            }
        }).then(x => {
            res.status(201).send({
                message: 'Usuário atualizado com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar usuário!'
                data: e
            });
        });
    
};

exports.delete = (req, res, next) => {
    Usuario.findOneAndRemove(req.body.id)
    .then(data => {
        res.status(201).send({
            message: 'Usuario removido com sucesso!'
        });
    }).catch(e => {
        res.status(400).send({
            message: 'Falha ao remover usuario',
            data: e
        });
    });
};

exports.getbyName = (req, res, next) =>{
    Usuario.find({
        nome: req.params.nome

    })
        .then(data => {
            res.status(201).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });

};


exports.login = (req, res, next) => {
    Usuario.find({
        email: req.params.email,
        senha1: req.params.senha
    })
        .then(data => {
            res.status(201).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

