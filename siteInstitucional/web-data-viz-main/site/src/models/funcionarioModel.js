var database = require("../database/config")

function entrarFuncionario(idFuncionario){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
    SELECT * FROM Funcionarios WHERE idFuncionario = '${idFuncionario}';
    `
    return database.executar(instrucao);
}

function cadastrarFuncionario(nomeFuncionario, emailFuncionario, whatsapp, gestor, fkEmpresa, fkLogin) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Funcionarios(idFuncionario, nomeFuncionario, emailFuncionario, whatsapp, gestor, fkEmpresa, fkLogin) VALUES (null, '${nomeFuncionario}', '${emailFuncionario}', '${whatsapp}', '${gestor}', ${fkEmpresa}, ${fkLogin})`; 
    return database.executar(instrucao);
}

module.exports = {
    entrarFuncionario,
    cadastrarFuncionario
};