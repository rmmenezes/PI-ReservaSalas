'use strict'

require ('dotenv-safe').load();
var jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');
const sendEmail = require('../csv/sendEmail')


exports.verifyJWT = (req, res, next) => {
    var token = req.headers['x-acess-token'];
    if(!token) return res.status(401).send({auth: false, message: 'no tokek provided' });

    jwt.verify(token, process.env.SECRET, function(err, decoded){
        if (err) return res.status(500).send({ auth: false, message: 'failed to authenticate token' });
    
        req.userId = decoded.id;
        next();
    })
};


exports.get = (req, res, next) => {
    Usuario.find({})
        .then(data => {
            console.log(data)
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
            sendEmail(usuario);
            res.status(200).send({
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
    Usuario.update({"_id": req.body._id}, {
        $set: {
            nome: req.body.nome,
            departamento: req.body.departamento,
            email: req.body.email       
        }
        }).then(x => {
            res.status(200).send({
                message: 'cadastrado'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'falha',
                data: e
            });
        });
    
};

exports.delete = (req, res, next) => {
    Usuario.findOneAndRemove(
        req.body.id
    )
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
        nome: new RegExp(req.params.nome)
    })
        .then(data => {
            res.status(201).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });

};


exports.login = (req, res, next) => {
    Usuario.find({
        email: req.body.email,
        senha1: req.body.senha1
    })
    .then(data => {        
        if(!data){
            res.status(500).send({message: 'Login invalido'});
        }
        else{
            const id = data._id;
            var token = jwt.sign({id}, process.env.SECRET, {
            expiresIn: 60700
        });
        var a = {auth: true, token: token}
        res.cookie("usuario", data);
        res.status(200).send(a);
        }
    }).catch(e => {
        res.status(500).send({message: 'Login invalido'});
    });
        
    
};

exports.logout = (req, res, next) => {
    res.status(200).send({auth: false, token: null});
};
