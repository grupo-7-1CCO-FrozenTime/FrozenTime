var empresaModel = require("../models/empresaModel");

var sessoes = [];

function testarEmpresa(req, res){
    console.log("ENTRAMOS NA empresaModel");
    res.json("Estamos Funcionando")
}

function listarEmpresa(req, res){
    empresaModel.listarEmpresa()
    .then(function  (resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        }
        else{
            res.status(204).send("Nenhum resultado de empresa encontrados");
        }
    }).catch(
        function(erro){
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function listarUltimoIdEmpresa(req, res){
    empresaModel.listarUltimoIdEmpresa()
    .then(function (resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        }
        else{
            res.status(204).send("Nenhum resultado de empresa encontrados");
        }
    }).catch(
        function(erro){
            console.log("Houve um erro ao realizar a consulta! Erro:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function listarIdEmpresa(req, res){
    var fkLogin = req.params.fkLogin;

    empresaModel.listarIdEmpresa(fkLogin).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarNomeEmpresa(req, res) {

    var idEmpresa = req.params.idEmpresa;

    empresaModel.listarNomeEmpresa(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function entrarEmpresa(req, res){
    if(idEmpresa == undefined){
        res.status(400).send("Seu idEmpresa está undefined!");
    }
    else{
        empresaModel.entrarEmpresa(idEmpresa)
        .then(
            function(resultado){
                if (resultado.length == 1) {
                    console.log(resultado);
                    res.json(resultado[0]);
                } else if (resultado.length == 0) {
                    res.status(403).send("Empresa não encontrada");
                } else {
                    res.status(403).send("Mais de uma empresa cadastrada com o mesmo ID!");
                }
            }
        ).catch(
            function(erro){
                console.log(erro);
                console.log("\nHouve um erro entrar na Empresa! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function cadastrarEmpresa(req, res){
    var nomeEmpresa = req.body.nomeEmpresa;
    var cnpjEmpresa = req.body.cnpjEmpresa;
    var cidade = req.body.cidade;
    var rua = req.body.rua;
    var bairro = req.body.bairro;
    var numero = req.body.numero;
    var complemento = req.body.complemento;

    if(nomeEmpresa == undefined){
        res.status(400).send("O Nome de sua Empresa está undefined!");
    }
    else if(cnpjEmpresa == undefined){
        res.status(400).send("O CNPJ de sua Empresa está undefined!");
    }
    else if(cidade == undefined){
        res.status(400).send("A Cidade de sua Empresa está undefined!");
    }
    else if(rua == undefined){
        res.status(400).send("A Rua de sua Empresa está undefined!");
    }
    else if(bairro == undefined){
        res.status(400).send("O Bairro de sua Empresa está undefined!");
    }
    else if(numero == undefined){
        res.status(400).send("O Numero de sua Empresa está undefined!");
    }
    else if(complemento == undefined){
        res.status(400).send("O Complemento de sua Empresa está undefined!");
    }
    else{
        empresaModel.cadastrarEmpresa(nomeEmpresa, cnpjEmpresa, cidade, rua, bairro, numero, complemento)
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
    entrarEmpresa,
    cadastrarEmpresa,
    listarEmpresa,
    testarEmpresa,
    listarUltimoIdEmpresa,
    listarNomeEmpresa,
    listarIdEmpresa
}