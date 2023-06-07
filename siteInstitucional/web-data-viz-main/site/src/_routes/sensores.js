var express = require("express");
var router = express.Router();

var sensoresController = require("../_controllers/sensoresController");

router.get("/", function (req, res) {
    sensoresController.testar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de sensoresController.js
router.post("/cadastrar", function (req, res) {
    sensoresController.cadastrar(req, res);
})


module.exports = router;