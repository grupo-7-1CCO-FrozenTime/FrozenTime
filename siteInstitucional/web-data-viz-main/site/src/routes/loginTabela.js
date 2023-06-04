var express = require("express");
var router = express.Router();

var loginTabelaController = require("../controllers/loginTabelaController");

router.get("/", function (req, res) {
    loginTabelaController.testarLoginTabela(req, res);
});

router.get("/listarUltimoIdLoginTabela", function (req, res) {
    loginTabelaController.listarUltimoIdLoginTabela(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de loginTabelaController.js
router.post("/cadastrarLoginTabela", function (req, res) {
    loginTabelaController.cadastrarLoginTabela(req, res);
})

router.post("/autenticarLoginTabela", function (req, res) {
    loginTabelaController.entrarLoginTabela(req, res);
});

module.exports = router;