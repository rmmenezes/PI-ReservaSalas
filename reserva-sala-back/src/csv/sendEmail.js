module.exports = (Usuario) =>{
    var nodemailer = require('nodemailer');
    var conta = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'ra29fa01@gmail.com', 
            pass: 'xPWBdweT6ihTMJd' 
        }
    });
    conta.sendMail({
        from: 'Sistema de Reservas UTFPR <ra29fa01@gmail.com>',
        to: Usuario.nome+' <'+Usuario.email+'>',
        subject: 'Sistema de Reservas UTFPR',
        html: 'Ola <b>'+Usuario.nome+'</b> você acabou de ser inscrito no nosso <b>Sistema de Reservas UTFPR - 2018</b> <br>Segue abaixo suas credenciais: <br><b>Login:</b> '+Usuario.email+' <br><b>Senha:</b> '+Usuario.senha1+'<br> Até Logo!!!'
    }, function(err){
        if(err)
            throw err;
    });
};