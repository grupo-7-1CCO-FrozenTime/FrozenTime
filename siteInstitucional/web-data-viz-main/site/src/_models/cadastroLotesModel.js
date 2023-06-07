var database = require("../database/config")

function cadastrarRota(localPartida, LocalDestino, dataSaida, dataChegada) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", localPartida, LocalDestino, dataSaida, dataChegada);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoRotas = `
        INSERT INTO Rotas (localPartida, LocalDestino, dtSaida, dtChegada) VALUES ('${localPartida}', '${LocalDestino}', '${dataSaida}', '${dataChegada}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoRotas);
    return database.executar(instrucaoRotas);
}

function cadastrarLote(idLote) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idLote);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoLote = `
        INSERT INTO Lotes (idLote) VALUES ('${idLote}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoLote);
    return database.executar(instrucaoLote);
}
function listarProdutosTransporte(){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    select count(distinct fkProduto) qtde from Lotes;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarLotes(){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    select count(idLote) qtdeLotes from lotes;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarAlertas(){
    console.log("vou listar os alertas");

    var instrucao = `
    select count(idAvisos) as qtde, fkLote FROM HistoricoAvisos JOIN lotes ON fkLote = idLote
    GROUP by fkLote;
    `

    console.log("vou executar: " + instrucao);

    return database.executar(instrucao)

}

module.exports = {
    cadastrarRota,
    cadastrarLote,
    listarProdutosTransporte,
    listarLotes,
    listarAlertas
};