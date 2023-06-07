var containerAlerts = document.createElement("div");
containerAlerts.id = "containerAlertas";

function exibirCards(temperatura) {
    alerta = document.getElementById("alerta");

  let informacao = document.createElement("div");
  informacao.className = 'mensagem-alarme'; 

  let temp = document.createElement("h3");
  temp.innerHTML = `Temperatura: ${temperatura}`;

  let sino = document.createElement("div");
  sino.className = "alarme-sino";

//   let btnFechar = document.createElement("span");
//   btnFechar.innerHTML = "X";
//   btnFechar.addEventListener("click", () => {
//     excluirAlerta(index);
//   });
  
  alerta.appendChild(informacao);
  informacao.appendChild(temp);
  informacao.appendChild(sino);
  informacao.appendChild(sino);
//   body.appendChild(btnFechar);


}

