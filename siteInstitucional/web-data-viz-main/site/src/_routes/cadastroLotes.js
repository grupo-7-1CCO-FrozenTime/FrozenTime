var express = require("express");
var router = express.Router();

var cadastroLotesController = require("../_controllers/cadastroLotesController");

router.get("/", function (req, res) {
    cadastroLotesController.testar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de cadastroLotesController.js
router.post("/cadastrarRota", function (req, res) {
    cadastroLotesController.cadastrarRota(req, res);
})

router.post("/cadastrarLote", function (req, res) {
    cadastroLotesController.cadastrarLote(req, res);
})



module.exports = router;