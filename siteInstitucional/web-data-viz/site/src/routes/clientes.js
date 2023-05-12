var express = require("express");
var router = express.Router();

var clientesController = require("../controllers/clientesController");

router.get("/", function (req, res) {
    clientesController.testar(req, res);
});

router.get("/listar", function (req, res) {
    clientesController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de clientesController.js
router.post("/cadastrar", function (req, res) {
    clientesController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    clientesController.entrar(req, res);
});

module.exports = router;