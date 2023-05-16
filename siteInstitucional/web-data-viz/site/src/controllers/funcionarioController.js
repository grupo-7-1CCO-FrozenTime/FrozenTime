var funcinarioModel = require("../models/funcionarioModel");

var sessoes = [];

function testarFuncionario(req, res){
    console.log("ENTRAMOS NA funcionarioModel");
    res.json("Estamos funcionando");
}

function cadastrarFuncionario(req, res){
    var nomeFuncionario = req.body.nomeFuncionario;
    var emailColaborador = req.body.emailColaborador;
    var whatsapp = req.body.whatsapp;
    var gestor = 1;
    var fkEmpresa = req.body.idEmpresa;
    var fkLogin = req.body.idLogin;

    if(nomeFuncionario == undefined){
        res.status(400).send("O Nome de seu Funcionário está undefined!");
    }
    else if(emailColaborador == undefined){
        res.status(400).send("O Email de seu Funcionário está undefined!");
    }
    else if(whatsapp == undefined){
        res.status(400).send("O Whatsapp de seu Funcionário está undefined!");
    }
    else if(gestor == undefined || gestor != 1){
        res.status(400).send("Seu Gestor está undefined e/ou não é um gestor!");
    }
    else if(fkEmpresa == undefined){
        res.status(400).send("A fkEmpresa de seu Funcionário está undefined!");
    }
    else if(fkLogin == undefined){
        res.status(400).send("A fkLogin de seu Funcionário está undefined!");
    }
    else{
        funcinarioModel.entrarFuncionario(nomeFuncionario, emailColaborador, whatsapp, gestor, fkEmpresa, fkLogin).then(
            function(resultado){
                res.json(resultado)
            }.catch(
                function (erro){
                    console.log(erro);
                    coonsole.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            )
        )
    }

}

module.exports = {
    testarFuncionario,
    cadastrarFuncionario,

}