var database = require("../database/config");

function cadastrarLoginTabela(emailLogin, senhaLogin) {
    console.log("ACESSEI O LOGIN TABELA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Login (emailFuncionario, senhaFuncionario) VALUES ('${emailLogin}', '${senhaLogin}')`; 
    return database.executar(instrucao);
}

function entrarLoginTabela(emailLogin, senhaLogin){
    var instrucao  = `SELECT * FROM Login WHERE emailFuncionario = '${emailLogin}' and senhaFuncionario = '${senhaLogin}'`;
    return database.executar(instrucao);
}

function listarUltimoIdLoginTabela(){
    var instrucao = `
    SELECT idLogin from Login order by idLogin desc LIMIT 1;
    `;
    return database.executar(instrucao);
}

module.exports = {
    cadastrarLoginTabela,
    entrarLoginTabela,
    listarUltimoIdLoginTabela
};