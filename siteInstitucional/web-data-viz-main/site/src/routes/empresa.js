var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

router.get("/", function (req, res){
    empresaController.testarEmpresa(req, res);
});

router.get("/listarEmpresa", function (req, res){
    empresaController.listarEmpresa(req, res);
});

router.get("/listarIdEmpresa/:fkLogin", function(req, res){
    empresaController.listarIdEmpresa(req, res);
});

router.get("/listarNomeEmpresa/:idEmpresa", function(req, res){
    empresaController.listarNomeEmpresa(req, res);
});
router.get("/listarUltimoIdEmpresa", function (req, res){
    empresaController.listarUltimoIdEmpresa(req, res);
});

router.post("/cadastrarEmpresa", function (req, res){
    empresaController.cadastrarEmpresa(req, res);
});

router.post("/autenticarEmpresa", function(req, res){
    empresaController.entrarEmpresa(req, res);
});

module.exports = router;