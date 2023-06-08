var express = require("express");
var router = express.Router();

var sensoresExistentesController = require("../_controllers/sensoresExistentesController");

router.get("/", function (req, res) {
    sensoresExistentesController.testar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de sensoresController.js
router.post("/cadastrar", function (req, res) {
    sensoresExistentesController.cadastrar(req, res);
})


module.exports = router;