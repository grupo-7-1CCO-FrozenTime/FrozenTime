var loginTabelaModel = require("../models/loginTabelaModel");

var sessoes = [];

function testarLoginTabela(req, res) {
    console.log("ENTRAMOS NA loginTabelaModel");
    res.json("ESTAMOS FUNCIONANDO!");
}

// function listarLoginTabela(req, res) {
//     loginTabelaModel.listarlogin()
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

function listarUltimoIdLoginTabela(req, res){
    loginTabelaModel.listarUltimoIdLoginTabela()
    .then(function (resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        }else{
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(
        function (erro){
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    )
}

// function entrarLoginTabela(req, res) {
//     var emailLogin = req.body.emailLogin;
//     var senhaLogin = req.body.senhaLogin;

//     if (emailLogin == undefined) {
//         res.status(400).send("Seu email está undefined!");
//     } else if (senhaLogin == undefined) {
//         res.status(400).send("Sua senha está indefinida!");
//     } else {
        
//         loginTabelaModel.entrar(emailLogin, senhaLogin)
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

function cadastrarLoginTabela(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var emailLogin = req.body.emailCliente;
    var senhaLogin = req.body.senhaCliente;

    // Faça as validações dos valores
    if (emailLogin == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senhaLogin == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo loginTabelaModel.js
        loginTabelaModel.cadastrarLoginTabela(emailLogin, senhaLogin)
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
    // entrarLoginTabela,
    cadastrarLoginTabela,
    listarUltimoIdLoginTabela,
    // listarLoginTabela,
    testarLoginTabela
}