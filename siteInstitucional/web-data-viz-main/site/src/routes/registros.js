var express = require("express");
var router = express.Router();

var registrosController = require("../controllers/registrosController");

router.get("/ultimosRegistros", function(req, res){
    registrosController.buscarUltimosRegistros(req, res);
});

router.get("/registrosTempoReal", function(req,res){
    registrosController.buscarRegistrosEmTempoReal(req, res);
});

module.exports = router;