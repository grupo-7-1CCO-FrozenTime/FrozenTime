var registrosModel = require("../models/registrosModel");

function buscarUltimosRegistros(req, res){
    const limite_linhas = 7;

    registrosModel.buscarUltimosRegistros(limite_linhas).then
    (function (resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        }else{
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro){
        console.log(erro);
        console.log("Houve um erro ao buscar os ultimos registros.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarRegistrosEmTempoReal(req, res){
    registrosModel.buscarRegistrosEmTempoReal().then(function
        (resultado){
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro){
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    buscarUltimosRegistros,
    buscarRegistrosEmTempoReal
}