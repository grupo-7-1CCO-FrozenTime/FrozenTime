var database = require("../database/config")

function listarEmpresa() {
    console.log("ACESSEI O EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM Empresas;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrarEmpresa(idEmpresa) {
    console.log("ACESSEI O EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idEmpresa)
    var instrucao = `
        SELECT * FROM Empresas WHERE idEmpresa = '${idEmpresa}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarEmpresa(nomeEmpresa, cnpjEmpresa, cidade, rua, bairro, numero, complemento) {
    console.log("ACESSEI O Empresa MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeEmpresa, cnpjEmpresa, cidade, rua, bairro, numero, complemento);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Empresas (nomeEmpresa, cnpjEmpresa, cidade, rua, bairro, numero, complemento) VALUES ('${nomeEmpresa}', '${cnpjEmpresa}', '${cidade}', '${rua}', '${bairro}', '${numero}', '${complemento}')`; 
        
    return database.executar(instrucao);
}

function listarUltimoIdEmpresa(){
    var instrucao = ` 
    select idEmpresa from Empresas order by idEmpresa desc LIMIT 1;
    `
    return database.executar(instrucao);
}
function listarIdEmpresa(fkLogin){
    var instrucao = `
    select idEmpresa from Empresas JOIN Funcionarios on idEmpresa = fkEmpresa where fkLogin = ${fkLogin};
    `
    return database.executar(instrucao);
}

function listarNomeEmpresa(idEmpresa){
    var instrucao = `
    select distinct(nomeEmpresa) from Empresas JOIN Funcionarios on idEmpresa = ${idEmpresa} JOIN Login on idLogin = fkLogin;`

    return database.executar(instrucao);
}
 
module.exports = {
    entrarEmpresa,
    cadastrarEmpresa,
    listarEmpresa,
    listarUltimoIdEmpresa,
    listarNomeEmpresa,
    listarIdEmpresa
};
