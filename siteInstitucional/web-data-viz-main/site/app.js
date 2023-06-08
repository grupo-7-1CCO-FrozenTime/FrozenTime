process.env.AMBIENTE_PROCESSO = "desenvolvimento";
// process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

var app = express();

var indexRouter = require("./src/routes/index");
var empresaRouter = require("./src/routes/empresa");
var loginTabelaRouter = require("./src/routes/loginTabela");
var funcionarioRouter = require("./src/routes/funcionario");
var registrosRouter = require("./src/routes/registros");

// cadastros do dashboard
var cadastroRefrigerador = require("./src/_routes/cadastroRefrigerador");
var cadastroProdutos = require("./src/_routes/cadastroProdutos");
var cadastroLotes = require("./src/_routes/cadastroLotes");
var sensores = require("./src/_routes/sensores");
var sensoresExistentesRouter = require('./src/_routes/sensoresExistentes');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/empresa", empresaRouter);
app.use("/loginTabela", loginTabelaRouter);
app.use("/funcionario", funcionarioRouter);
app.use("/cadastroRefrigerador", cadastroRefrigerador);
app.use("/cadastroProdutos", cadastroProdutos);
app.use("/cadastroLotes", cadastroLotes);
app.use("/sensores", sensores);
app.use("/registros", registrosRouter);
app.use("/sensoresExistentes", sensoresExistentesRouter)

app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
    \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});