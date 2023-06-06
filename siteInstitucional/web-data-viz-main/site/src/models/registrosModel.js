 var database = require("../database/config");

 function buscarUltimosRegistros(limite_linhas){
    var instrucao = `
    SELECT temperatura, horaRegistro, minutoRegistro FROM Registros where fkSensor = 1 order by idRegistro desc LIMIT ${limite_linhas}`;

    return database.executar(instrucao);
 }

function buscarRegistrosEmTempoReal(){

    var instrucao = `
    SELECT temperatura, horaRegistro, minutoRegistro FROM Registros where fkSensor = 1 order by idRegistro desc LIMIT 1
    `;

    return database.executar(instrucao);
}

 module.exports = {
    buscarUltimosRegistros,
    buscarRegistrosEmTempoReal
 }