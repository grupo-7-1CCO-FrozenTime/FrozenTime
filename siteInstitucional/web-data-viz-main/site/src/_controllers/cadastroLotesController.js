var cadastroLotesModel = require("../_models/cadastroLotesModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}


function cadastrarRota(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var localPartida = req.body.localPartidaServer;
    var destino = req.body.destinoServer;
    var dataSaida = req.body.dataSaidaServer;
    var dataChegada = req.body.dataChegadaServer;


    // Faça as validações dos valores
    if (localPartida == undefined) {
        res.status(400).send("Seu localPartida está undefined!");
    } else if (destino == undefined) {
        res.status(400).send("Sua destino está undefined!");
    } else if (dataSaida == undefined) {
        res.status(400).send("Sua destino está undefined!");
    } else if (dataChegada == undefined) {
        res.status(400).send("Sua destino está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo cadastroRefrigeradoresModel.js
        cadastroLotesModel.cadastrarRota(localPartida, destino, dataSaida, dataChegada)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
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


function cadastrarLote(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var idLote = req.body.idLoteServer;


    // Faça as validações dos valores
    if (idLote == undefined) {
        res.status(400).send("Seu idLote está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo cadastroRefrigeradoresModel.js
        cadastroLotesModel.cadastrarLote(idLote)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
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

function listarProdutosTransporte(req, res) {
    
    console.log(`Recuperando medidas em tempo real`);

    // Faça as validações dos valores
    cadastroLotesModel.listarProdutosTransporte().then(function (resultado) {
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

function listarLotes(req, res){
    console.log("cheguei na controller ")

    cadastroLotesModel.listarLotes().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }}
        ).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        })
}

function listarAlertas(req, res){
    cadastroLotesModel.listarAlertas().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }}
        ).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        })
}



module.exports = {
    cadastrarRota,
    testar,
    cadastrarLote,
    listarProdutosTransporte,
    listarLotes,
    listarAlertas
}

