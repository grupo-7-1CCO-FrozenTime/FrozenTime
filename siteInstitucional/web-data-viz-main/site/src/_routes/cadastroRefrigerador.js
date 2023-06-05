var express = require("express");
var router = express.Router();

var cadastroRefrigeradoresController = require("../_controllers/cadastroRefrigeradoresController");

router.get("/", function (req, res) {
    cadastroRefrigeradoresController.testar(req, res);
});

// router.get("/listar", function (req, res) {
//     cadastroRefrigeradoresController.listar(req, res);
// });

//Recebendo os dados do html e direcionando para a função cadastrar de cadastroRefrigeradoresController.js
router.post("/cadastrar", function (req, res) {
    cadastroRefrigeradoresController.cadastrar(req, res);
})

// router.post("/autenticar", function (req, res) {
//     cadastroRefrigeradoresController.entrar(req, res);
// });

module.exports = router;