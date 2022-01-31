var comida = "",
  bebida = "",
  sobremesa = "",
  nome = "",
  endereco = "";
var idComida = "",
  idBebida = "",
  idSobremesa = "",
  nome = "",
  endereco = "";
var valorComida = 0,
  valorBebida = 0,
  valorSobremesa = 0,
  total = 0;

function verificarBotao() {
  if (comida != "" && bebida != "" && sobremesa != "") {
    document.getElementById("botao").disabled = false;
    document.getElementById("botao").style.background = "green";
    document.getElementById("texto").innerHTML = "Finalizar Pedido";
  } else {
    document.getElementById("botao").disabled = true;
  }
}

function escolherLanche(id, nome, valor) {
  var lanche = ["hamburguer", "xburguer", "eggburguer", "xtudo", "vburguer"];

  for (var i = 0; i < lanche.length; i++) {
    if (id != lanche[i]) {
      document.getElementById(lanche[i]).style.boxShadow = "none";
      document
        .getElementById(lanche[i])
        .getElementsByTagName("ion-icon")[0].style.background = "#fff";
    } else {
      document
        .getElementById(id)
        .getElementsByTagName("ion-icon")[0].style.background = "green";
      document.getElementById(id).style.boxShadow =
        "0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";
      idComida = id;
      comida = nome;
      valorComida = valor;
    }
  }

  verificarBotao();
}

function escolherRefri(id, nome, valor) {
  var lanche = [
    "refrilata",
    "refri1litro",
    "umlitromeio",
    "doislitros",
    "treslitros"
  ];

  for (var i = 0; i < lanche.length; i++) {
    if (id != lanche[i]) {
      document.getElementById(lanche[i]).style.boxShadow = "none";
      document
        .getElementById(lanche[i])
        .getElementsByTagName("ion-icon")[0].style.background = "#fff";
    } else {
      document
        .getElementById(id)
        .getElementsByTagName("ion-icon")[0].style.background = "green";
      document.getElementById(id).style.boxShadow =
        "0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";
      idBebida = id;
      bebida = nome;
      valorBebida = valor;
    }
  }

  verificarBotao();
}

function escolherSobremesa(id, nome, valor) {
  var lanche = ["leite", "chocolate", "coco", "morango", "maracuja"];

  for (var i = 0; i < lanche.length; i++) {
    if (id != lanche[i]) {
      document.getElementById(lanche[i]).style.boxShadow = "none";
      document
        .getElementById(lanche[i])
        .getElementsByTagName("ion-icon")[0].style.background = "#fff";
    } else {
      document
        .getElementById(id)
        .getElementsByTagName("ion-icon")[0].style.background = "green";
      document.getElementById(id).style.boxShadow =
        "0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";
      idSobremesa = id;
      sobremesa = nome;
      valorSobremesa = valor;
    }
  }
  verificarBotao();
}

function finalizarPedido() {
  verificarBotao();
  if (document.getElementById("botao").disabled == true) {
    document.getElementById("botao").style.background = "#CBCBCB";
  } else {
    nome = prompt("Nome para entrega:");
    endereco = prompt("Endereço para entrega:");

    document.getElementById("fundos").style.display = "flex";
    document.getElementById("fundos").style.justifyContent = "center";
    document.getElementById("fundos").style.zIndex = "2";
    document.getElementById("bonus").style.display = "flex";
    document.getElementById("bonus").style.position = "fixed";
    document.getElementById("bonus").style.zIndex = "3";
    document.getElementById("texto").innerHTML = "Finalizar Pedido";

    document.querySelector(".titulo").innerHTML = "Confirma seu Pedido";
    document.querySelector(".comida").innerHTML = comida;
    document.querySelector(".vcomida").innerHTML = valorComida.toFixed(2);
    document.querySelector(".bebida").innerHTML = bebida;
    document.querySelector(".vbebida").innerHTML = valorBebida.toFixed(2);
    document.querySelector(".sobremesa").innerHTML = sobremesa;
    document.querySelector(".vsobremesa").innerHTML = valorSobremesa.toFixed(2);

    total = (valorBebida + valorComida + valorSobremesa).toFixed(2);
    document.querySelector(".total").innerHTML = "R$ " + total;
  }
}

function confirmarPedido() {
  let mensagemzap = `Olá, gostaria de fazer o pedido:\n - Prato: ${comida}\n - Bebida: ${bebida}\n - Sobremesa: ${sobremesa}\n\nTotal: R$ ${total}\n\n\ Nome:${nome}\n Endereço: ${endereco}`;
  mensagemzap = window.encodeURIComponent(mensagemzap);
  window.open(
    "https://api.whatsapp.com/send?phone=" +
      5532999253244 +
      "&text=" +
      mensagemzap,
    "_blank"
  );
}

function cancelarPedido() {
  comida = "";
  bebida = "";
  sobremesa = "";
  nome = "";
  endereco = "";
  valorComida = 0;
  valorBebida = 0;
  valorSobremesa = 0;
  total = 0;
  document.getElementById("botao").disabled = true;
  document.getElementById("texto").innerHTML =
    "Selecionar os 3 itens para fechar o pedido";
  document.getElementById("botao").style.background = "#CBCBCB";
  document.getElementById("fundos").style.display = "none";
  document.getElementById("bonus").style.display = "none";

  document.querySelector("#" + idComida).style.boxShadow = "none";
  document
    .querySelector("#" + idComida)
    .getElementsByTagName("ion-icon")[0].style.background = "#fff";
  document.querySelector("#" + idBebida).style.boxShadow = "none";
  document
    .querySelector("#" + idBebida)
    .getElementsByTagName("ion-icon")[0].style.background = "#fff";
  document.querySelector("#" + idSobremesa).style.boxShadow = "none";
  document
    .querySelector("#" + idSobremesa)
    .getElementsByTagName("ion-icon")[0].style.background = "#fff";
}
