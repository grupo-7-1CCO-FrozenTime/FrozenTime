var database = require("../database/config")

function listarEmpresa() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrarEmpresa(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarEmpresa(nomeEmpresa, cnpjEmpresa, cidade, rua, bairro, numero, complemento) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Empresa (nomeEmpresa, cnpjEmpresa, cidade, rua, bairro, numero, complemento) VALUES ('${nomeEmpresa}', '${cnpjEmpresa}', '${cidade}', '${rua}', '${bairro}', '${numero}', '${complemento}')`; 
        
    return database.executar(instrucao);
}

module.exports = {
    entrarEmpresa,
    cadastrarEmpresa,
    listarEmpresa,
};


// CADASTRO:
// nomeEmpresa
// CNPJEmpresa
// EndereçoEmpresa
// CidadeEmpresa
// NúmeroEmpresa
// ComplementoEMpresa

// nomeFuncionario,
// emailCliente,
// telefone
// whatsapp,
// fk_empresa,
// senhaCliente


// LOGIN
// fk_login