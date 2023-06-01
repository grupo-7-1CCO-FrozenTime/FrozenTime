var express = require("express");
var router = express.Router();

var funcionarioController = require("../controllers/funcionarioController");

router.get("/", function (req, res) {
    funcionarioController.testarFuncionario(req, res);
});

router.get("/listarFuncionario", function (req, res) {
    usuarioController.listarFuncionario(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarFuncionario", function (req, res) {
    usuarioController.cadastrarFuncionario(req, res);
})

router.post("/autenticarFuncionario", function (req, res) {
    usuarioController.entrarFuncionario(req, res);
});

module.exports = router;