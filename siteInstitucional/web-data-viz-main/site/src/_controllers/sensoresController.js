var cadastroLotesModel = require("../_models/sensoresModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}


function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var idSensor = req.body.idSensorServer;
    var fkLote = req.body.fkLoteServer;


    // Faça as validações dos valores
    if (idSensor == undefined) {
        res.status(400).send("Seu idSensor está undefined!");
    } else if (fkLote == undefined) {
        res.status(400).send("Seu fkLote está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo cadastroRefrigeradoresModel.js
        cadastroLotesModel.cadastrarRota(idSensor, fkLote)
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


module.exports = {
    cadastrar,
    testar,
}