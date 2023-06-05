// Funcionalidade dos gráficos
// Leitura de dados do sensor Arduino que vão ser computados e mandados para o MySQL e o HTML


//  é uma forma que foi desenvolvida para importar e exportar módulos em uma aplicação
// O require aceita apenas exportações por meio do module.exports, que pode conter qualquer tipo de dado, como: objetos, funções, strings
const serialport = require('serialport');
const express = require('express');
const mysql = require('mysql2');
// conexão com o Arduino
const SERIAL_BAUD_RATE = 9600;
// uma porta que se abre no IP para manda a conexão local
const SERVIDOR_PORTA = 3000;
const HABILITAR_OPERACAO_INSERIR = true;
// vai receber de forma Assíncrona os dados, recebendo um por um
const serial = async (
    // valoresDht11Umidade,
    // valoresDht11Temperatura,
    // valoresLuminosidade,
    valoresLm35Temperatura,
    // valoresChave
) => {
    // Um pool de conexões é um cache de conexões de banco de dados que são compartilhadas e reutilizadas para melhorar a latência e o desempenho da conexão.
    const poolBancoDados = mysql.createPool(
        {
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'Nino0911',
            database: 'FrozenTime'
        }
    ).promise();
        // await espera a resposta da função assíncrona
    const portas = await serialport.SerialPort.list();
    const portaArduino = portas.find((porta) => porta.vendorId == 2341 && porta.productId == 43);
    if (!portaArduino) {
        throw new Error('O arduino não foi encontrado em nenhuma porta serial');
    }
    const arduino = new serialport.SerialPort(
        {
            path: portaArduino.path,
            baudRate: SERIAL_BAUD_RATE
        }
    );
    arduino.on('open', () => {
        console.log(`A leitura do arduino foi iniciada na porta ${portaArduino.path} utilizando Baud Rate de ${SERIAL_BAUD_RATE}`);
    });
    arduino.pipe(new serialport.ReadlineParser({ delimiter: '\r\n' })).on('data', async (data) => {
        const valores = data.split(';');
        console.log(valores)
        // tradução pra float dos valores que estão em parênteses
        // const dht11Umidade = parseFloat(valores[0]);
        // const dht11Temperatura = parseFloat(valores[1]);
        // const luminosidade = parseFloat(valores[2]);
        const lm35Temperatura = parseFloat(valores[0]);
        const fkSensor = parseInt(valores[1]);
        // const chave = parseInt(valores[4]);
        // Mandando o vetor para o array
        // valoresDht11Umidade.push(dht11Umidade);
        // valoresDht11Temperatura.push(dht11Temperatura);
        // valoresLuminosidade.push(luminosidade);
        valoresLm35Temperatura.push(lm35Temperatura);
        // valoresChave.push(chave);

        if (HABILITAR_OPERACAO_INSERIR) {
            await poolBancoDados.execute(
                `INSERT INTO Registros(temperatura, horaRegistro, minutoRegistro, fkSensor, fkKit) VALUES (${lm35Temperatura}, HOUR(now()), MINUTE(now()), ${fkSensor}, (select distinct(idKit) from Kits JOIN Sensores on fkKit = idKit and idSensor = fkSensor))`,
                [lm35Temperatura, fkSensor]
            );
        }

    });
    // na condição do arduino ativa a mensagem de erro
    arduino.on('error', (mensagem) => {
        console.error(`Erro no arduino (Mensagem: ${mensagem}`)
    });
}
// uma arrow function, com tais parâmetros
const servidor = (
    // valoresDht11Umidade,
    // valoresDht11Temperatura,
    // valoresLuminosidade,
    valoresLm35Temperatura,
    // valoresChave
) => {
    // express cria um micro serviço, como uma API 
    const app = express();
    // .use estabelece parâmetros para executar, ou seja, PRECISA disso para funcionar
    app.use((request, response, next) => {
        // response.header faz comunicação entre o servidor e a página
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
        next();
    });
    // quado você pede pro servidor ouvir a aplicação, se a conexão for estabelecida executa o console.log
    app.listen(SERVIDOR_PORTA, () => {
        console.log(`API executada com sucesso na porta ${SERVIDOR_PORTA}`);
    });
    // app.get('/sensores/dht11/umidade', (_, response) => {
    //     return response.json(valoresDht11Umidade);
    // });
    // app.get('/sensores/dht11/temperatura', (_, response) => {
    //     return response.json(valoresDht11Temperatura);
    // });
    // app.get('/sensores/luminosidade', (_, response) => {
    //     return response.json(valoresLuminosidade);
    // });
    app.get('/sensores/lm35/temperatura', (_, response) => {
        return response.json(valoresLm35Temperatura);
    });
    // app.get('/sensores/chave', (_, response) => {
    //     return response.json(valoresChave);
    // });
}

(async () => {
    // const valoresDht11Umidade = [];
    // const valoresDht11Temperatura = [];
    // const valoresLuminosidade = [];
    const valoresLm35Temperatura = [];
    // const valoresChave = [];
    await serial(
        // valoresDht11Umidade,
        // valoresDht11Temperatura,
        // valoresLuminosidade,
        valoresLm35Temperatura,
        // valoresChave
    );
    servidor(
        // valoresDht11Umidade,
        // valoresDht11Temperatura,
        // valoresLuminosidade,
        valoresLm35Temperatura,
        // valoresChave
    );
})();
