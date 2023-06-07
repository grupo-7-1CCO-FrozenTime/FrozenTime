var express = require("express");
var router = express.Router();

var cadastroProdutosController = require("../_controllers/cadastroProdutosController");

router.get("/", function (req, res) {
    cadastroProdutosController.testar(req, res);
});


// router.get("/listar", function (req, res) {
//     cadastroProdutosController.listar(req, res);
// });

router.get("/listarProdutos", function (req, res) {
    cadastroProdutosController.listarProdutos(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de cadastroProdutosController.js
router.post("/cadastrar", function (req, res) {
    cadastroProdutosController.cadastrar(req, res);
})

// router.post("/autenticar", function (req, res) {
//     cadastroProdutosController.entrar(req, res);
// });

module.exports = router;