let prompt = require("prompt-sync")();
let soma = require("./soma");

function interface() {
  console.log(
    "Digite o número correspondente a operação que seja realizar \n" +
      "1. Soma \n" +
      "2. Subtração \n" +
      "3. Multiplicação \n" +
      "4. Divisão \n" +
      "0. SAIR"
  );
  const operacao = prompt();
  if (operacao == "0") {
    return;
  }
  const valor1 = parseFloat(prompt("Digite o primeiro valor: "));
  const valor2 = parseFloat(prompt("Digite o segundo valor: "));

  switch (operacao) {
    case "1":
      const resposta = soma(valor1, valor2);
      console.log(valor1 + " + " + valor2 + " = " + resposta + "\n");
      return outraOperacao();
    case "0":
      return;
    default:
      console.log("Digite uma operação válida");
      return interface();
  }
}

function outraOperacao() {
  console.log("Deseja fazer outra operação? \n" + "1. SIM \n" + "2. NÃO");
  const resposta = prompt();
  switch (resposta) {
    case "1":
      interface();
    case "2":
      return;
    default:
      console.log("Digite uma entrada válida");
      "";
  }
}

interface();
