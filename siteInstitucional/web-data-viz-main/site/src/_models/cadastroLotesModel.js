var database = require("../database/config")

function cadastrarRota(localPartida, destino, dataSaida, dataChegada) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", localPartida, destino, dataSaida, dataChegada);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoRotas = `
        INSERT INTO Rotas (localPartida, destino, dataSaida, dataChegada) VALUES ('${localPartida}', '${destino}', '${dataSaida}', '${dataChegada}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoRotas);
    return database.executar(instrucaoRotas);
}

function cadastrarLote(idLote) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idLote);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoLote = `
        INSERT INTO Lotes (localPartida, destino, dataSaida, dataChegada) VALUES ('${idLote}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoLote);
    return database.executar(instrucaoLote);
}

module.exports = {
    cadastrarRota,
    cadastrarLote,
};