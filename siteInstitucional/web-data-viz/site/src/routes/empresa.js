var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

router.get("/", function (req, res){
    empresaController.testarEmpresa(req, res);
});

router.get("/listar", function (req, res){
    empresaController.listarEmpresa(req, res);
});

router.post("/cadastrar", function (req, res){
    empresaController.cadastrarEmpresa(req, res);
})

router.post("/autenticar", function(req, res){
    empresaController.entrarEmpresa
})