var alertas = [];
// não sei o q colocar no lugar d idAquario, se é idRegistro/ idSensor/idLote/idProduto

function alertar(resposta, idLote) {
    var temp = resposta[0].temperatura;

    console.log(idLote === resposta[0].fkLote)
    
    var grauDeAviso ='';


    var limites = {
        criticoQuente: 8.5,
        cuidadoQuente: 8,
        estavel2: 7.5,
        estavel1: 2.5,
        cuidadoFrio: 2,
        criticoFrio: 1.5
    };

    var classe_temperatura = 'cor-alerta';

    if (temp >= limites.criticoQuente) {
        classe_temperatura = 'cor-alerta perigo-quente';
        grauDeAviso = 'crítico'
        grauDeAvisoCor = 'cor-alerta perigo-quente'
        exibirAlerta(temp, idLote, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp < limites.criticoQuente && temp >= limites.cuidadoQuente) {
        classe_temperatura = 'cor-alerta alerta-quente';
        grauDeAviso = 'de cuidado'
        grauDeAvisoCor = 'cor-alerta alerta-quente'
        exibirAlerta(temp, idLote, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp < limites.cuidadoQuente && temp > limites.cuidadoFrio) {
        classe_temperatura = 'cor-alerta ideal';
        removerAlerta(idLote);
    }
    else if (temp <= limites.cuidadoFrio && temp > limites.criticoFrio) {
        classe_temperatura = 'cor-alerta alerta-frio';
        grauDeAviso = 'cuidado'
        grauDeAvisoCor = 'cor-alerta alerta-frio'
        exibirAlerta(temp, idLote, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp <= limites.muito_frio) {
        classe_temperatura = 'cor-alerta perigo-frio';
        grauDeAviso = 'crítico'
        grauDeAvisoCor = 'cor-alerta perigo-frio'
        exibirAlerta(temp, idLote, grauDeAviso, grauDeAvisoCor)
    }

    card.className = classe_temperatura;
}

function exibirAlerta(temp, idLote, grauDeAviso, grauDeAvisoCor) {
    var indice = alertas.findIndex(item => item.idLote == idLote);

    if (indice >= 0) {
        alertas[indice] = { idLote, temp, grauDeAviso, grauDeAvisoCor }
    } else {
        alertas.push({ idLote, temp, grauDeAviso, grauDeAvisoCor });
    }

    exibirCards();
    
// Dentro da div com classe grauDeAvisoCor há um caractere "invisível", 
// que pode ser inserido clicando com o seu teclado em alt+255 ou pelo código adicionado acima.
}

function removerAlerta(idLote) {
    alertas = alertas.filter(item => item.idLote != idLote);
    exibirCards();
}
 
function exibirCards() {
    alerta.innerHTML = '';

    for (var i = 0; i < alertas.length; i++) {
        var mensagem = alertas[i];
        alerta.innerHTML += transformarEmDiv(mensagem);
    }
}

function transformarEmDiv({ idLote, temp, grauDeAviso, grauDeAvisoCor }) {
    return `<div class="mensagem-alarme">
    <div class="informacao">
    <div class="${grauDeAvisoCor}">&#12644;</div> 
     <h3>Lote ${idLote} está em estado ${grauDeAviso}!</h3>
    <small>Temperatura ${temp}.</small>   
    </div>
    <div class="alarme-sino"></div>
    </div>`;
}