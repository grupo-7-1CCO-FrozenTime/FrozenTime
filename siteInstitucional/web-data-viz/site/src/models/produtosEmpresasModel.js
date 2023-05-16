var database = require("../database/config");

function listarProdutosEmpresas(){
    console.log("ACESSEI O EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM ProdutosEmpresas;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrarProdutosEmpresas(fkProduto, fkEmpresa){
    console.log("ACESSEI O PRODUTOS EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idEmpresa)
    var instrucao = `
        SELECT * FROM ProdutosEmpresa WHERE fkProduto = '${fkProduto}' AND fkEmpresa = '${fkEmpresa}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarProdutosEmpresas(fkProduto, fkEmpresa){
    console.log("ACESSEI A ProdutosEmpresa MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fkProduto, fkEmpresa);
    
    var instrucao = `
    INSERT INTO ProdutosEmpresa (fkProduto, fkEmpresa) VALUES ('${fkProduto}', '${fkEmpresa}');
    `

    return database.executar(instrucao);
}

module.exports = {
    entrarProdutosEmpresas,
    cadastrarProdutosEmpresas,
    listarProdutosEmpresas
}