var cadastroProdutosModel = require("../_models/cadastroProdutosModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

// function listar(req, res) {
//     cadastroProdutosModel.listar()
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

    var nomeProduto = req.body.nomeProdutoServer;
    var categoriaProduto = req.body.categoriaProdutoServer;


    // Faça as validações dos valores
    if (nomeProduto == undefined) {
        res.status(400).send("Seu nomeProduto está undefined!");
    } else if (categoriaProduto == undefined) {
        res.status(400).send("Sua categoriaProduto está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo cadastroRefrigeradoresModel.js
        cadastroProdutosModel.cadastrar(nomeProduto, categoriaProduto)
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

function listarProdutos(req, res){
    console.log("cheguei na controller ")

    cadastroProdutosModel.listarProdutos().then(function (resultado) {
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
    // entrar,
    cadastrar,
    // listar,
    testar,
    listarProdutos
}