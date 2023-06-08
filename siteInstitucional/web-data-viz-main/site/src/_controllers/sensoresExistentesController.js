var sensoresExistentesModel= require("../_models/sensoresExistentesModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}


function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var idSensor = req.body.idSensorExistenteServer;
    var fkLote = req.body.idLoteExistenteServer;


    // Faça as validações dos valores
    if (idSensor == undefined) {
        res.status(400).send("Seu idSensor está undefined!");
    } else if (fkLote == undefined) {
        res.status(400).send("Seu fkLote está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo cadastroRefrigeradoresModel.js
        sensoresExistentesModel.cadastrar(idSensor, fkLote)
            .then(
                function (resultado) {
                    res.status(200).json(resultado);
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