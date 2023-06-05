var cadastroRefrigeradorModel = require("../_models/cadastroRefrigeradorModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

// function listar(req, res) {
//     cadastroRefrigeradorModel.listar()
//         .then(function (resultado) {
//             if (resultado.length > 0) {
//                 res.status(200).json(resultado);
//             } else {
//                 res.status(204).send("Nenhum resultado encontrado!")
//             }
//         }).catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );
// }

// function entrar(req, res) {
//     var email = req.body.emailServer;
//     var senha = req.body.senhaServer;

//     if (email == undefined) {
//         res.status(400).send("Seu email está undefined!");
//     } else if (senha == undefined) {
//         res.status(400).send("Sua senha está indefinida!");
//     } else {
        
//         cadastroRefrigeradoresModel.entrar(email, senha)
//             .then(
//                 function (resultado) {
//                     console.log(`\nResultados encontrados: ${resultado.length}`);
//                     console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

//                     if (resultado.length == 1) {
//                         console.log(resultado);
//                         res.json(resultado[0]);
//                     } else if (resultado.length == 0) {
//                         res.status(403).send("Email e/ou senha inválido(s)");
//                     } else {
//                         res.status(403).send("Mais de um usuário com o mesmo login e senha!");
//                     }
//                 }
//             ).catch(
//                 function (erro) {
//                     console.log(erro);
//                     console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
//                     res.status(500).json(erro.sqlMessage);
//                 }
//             );
//     }

// }

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var idRefrigerador = req.body.idRefrigeradorServer;
    var cidade = req.body.cidadeServer;
    var rua = req.body.ruaServer;
    var cep = req.body.cepServer;
    var bairro = req.body.bairroServer;
    var numero = req.body.numeroServer;
    var nomeFarmacia = req.body.nomeFarmaciaServer;


    // Faça as validações dos valores
    if (idRefrigerador == undefined) {
        res.status(400).send("Seu idRefrigerador está undefined!");
    } else if (cidade == undefined) {
        res.status(400).send("Sua cidade está undefined!");
    } else if (rua == undefined) {
        res.status(400).send("Sua rua está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else if (bairro == undefined) {
        res.status(400).send("Seu bairro está undefined!");
    } else if (numero == undefined) {
        res.status(400).send("Seu numero está undefined!");
    } else if (nomeFarmacia == undefined) {
        res.status(400).send("Seu nomeFarmacia está undefined!");
    } else  {
        
        // Passe os valores como parâmetro e vá para o arquivo cadastroRefrigeradoresModel.js
        cadastroRefrigeradorModel.cadastrar(idRefrigerador, cidade, rua, cep, bairro, numero, nomeFarmacia)
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
    // entrar,
    cadastrar,
    // listar,
    testar
}