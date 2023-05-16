var express = require("express");
var router = express.Router();

var loginTabelaController = require("../controllers/loginTabelaController");

router.get("/", function (req, res) {
    loginTabelaController.testarLoginTabela(req, res);
});

router.get("/listar", function (req, res) {
    loginTabelaController.listarLoginTabela(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de loginTabelaController.js
router.post("/cadastrar", function (req, res) {
    loginTabelaController.cadastrarLoginTabela(req, res);
})

router.post("/autenticar", function (req, res) {
    loginTabelaController.entrarLoginTabela(req, res);
});

module.exports = router;