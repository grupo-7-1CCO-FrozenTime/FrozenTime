var funcionarioModel = require("../models/funcionarioModel");

var sessoes = [];

function testarFuncionario(req, res){
    console.log("ENTRAMOS NA funcionarioModel");
    res.json("Estamos funcionando");
}

function listarFuncionario(req, res){
    funcionarioModel.listarFuncionario()
    .then(function (resultado){
      if(resultado.length > 0){
          res.status(200).json(resultado);
      }
      else{
        res.status(204).send("Nenhum resultado de Funcionario encontrado!")
      }
    }).catch(
        function(erro){
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function entrarFuncionario(req, res){
    if(idFuncionario == undefined){
        res.status(400).send("Seu idFuncionario está undefined!");
    }
    else{
        funcionarioModel.entrarFuncionario(idFuncionario)
        .then(
            function(resultado){
                if (resultado.length == 1) {
                    console.log(resultado);
                    res.json(resultado[0]);
                } else if (resultado.length == 0) {
                    res.status(403).send("Funcionário não encontrado");
                } else {
                    res.status(403).send("Mais de um funcionário cadastrado com o mesmo ID!");
                }
            }
        ).catch(
            function(erro){
                console.log(erro);
                console.log("\nHouve um erro entrar no Funcionário! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function cadastrarFuncionario(req, res){
    var nomeFuncionario = req.body.nomeFuncionario;
    var emailFuncionario = req.body.emailFuncionario;
    var whatsapp = req.body.whatsapp;
    var gestor = 1;
    var fkEmpresa = req.body.fkEmpresa;
    var fkLogin = req.body.fkLogin;

    if(nomeFuncionario == undefined){
        res.status(400).send("O Nome de seu Funcionário está undefined!");
    }
    else if(emailFuncionario == undefined){
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
        funcionarioModel.cadastrarFuncionario(nomeFuncionario, emailFuncionario, whatsapp, gestor, fkEmpresa, fkLogin)
        .then(
            function(resultado){
                res.json(resultado);
            }
        ).catch(
            function (erro){
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }

}

module.exports = {
    testarFuncionario,
    listarFuncionario,
    cadastrarFuncionario,
    entrarFuncionario

}