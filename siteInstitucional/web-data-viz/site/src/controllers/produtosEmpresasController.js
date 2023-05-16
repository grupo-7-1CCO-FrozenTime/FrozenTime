var produtosEmpresas = require("../models/produtosEmpresasModel");

var sessoes = [];

function testarProdutosEmpresas(req, res){
    console.log("ENTRAMOS NA produtosEmpresasModel");
    res.json("Estamos Funcionando");
}

function listarProdutosEmpresa(req, res){
    produtosEmpresas.listarProdutosEmpresa()
    .then(function (resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        }
        else{
            res.status(204).send("Nenhum resultado de produtosEmpresa encontrados");
        }
    }).catch(
        function(erro){
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function cadastrarProdutosEmpresas(req, res){
    var fkProduto = req.body.fkProduto;
    var fkEmpresa = req.body.fkEmpresa;

    if(fkProduto == undefined){
        res.status(400).send("A fkProduto de seu ProdutosEmpresas está undefined");
    }
    else if(fkEmpresa == undefined){
        res.status(400).send("A fkEmpresa de seu ProdutosEmpresa está undefinded");
    }
    else{
        produtosEmpresas.entrarProdutosEmpresa(fkProduto, fkEmpresa)
        .then(
            function(resultado){
                res.json(resultado);
            }
        ).catch(
            function (erro){
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
    testarProdutosEmpresas,
    cadastrarProdutosEmpresas,
    listarProdutosEmpresa
}