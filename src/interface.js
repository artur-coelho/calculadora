let prompt = require("prompt-sync")();
let soma = require("./soma");
let subtracao = require("./subtracao");
let multiplcacao = require("./multiplicacao");
let divisao = require("./divisao");
let potencia = require("./potencia");

function interface() {
  console.log("-------------------------");
  console.log("CALCULADORA REPOSIÇÃO GCM");
  console.log("-------------------------");
  console.log(
    "Digite o número correspondente a operação que seja realizar \n" +
      "1. Soma \n" +
      "2. Subtração \n" +
      "3. Multiplicação \n" +
      "4. Divisão \n" +
      "5. Potenciação ao quadrado \n" +
      "0. SAIR"
  );
  const operacao = prompt();
  if (operacao == "0") {
    return false;
  }

  const valor1 = parseFloat(prompt("Digite o primeiro valor: "));
  const valor2 = parseFloat(prompt("Digite o segundo valor: "));

  switch (operacao) {
    case "0":
      return false;
    case "1":
      const respostaSoma = soma(valor1, valor2);
      console.log(valor1 + " + " + valor2 + " = " + respostaSoma + "\n");
      return outraOperacao();
    case "2":
      const respostaSub = subtracao(valor1, valor2);
      console.log(valor1 + " - " + valor2 + " = " + respostaSub + "\n");
      return outraOperacao();
    case "3":
      const respostaMult = multiplcacao(valor1, valor2);
      console.log(valor1 + " x " + valor2 + " = " + respostaMult + "\n");
      return outraOperacao();
    case "4":
      const respostaDiv = divisao(valor1, valor2);
      console.log(valor1 + " / " + valor2 + " = " + respostaDiv + "\n");
      return outraOperacao();
    case "5":
      const respostaPotencia = potencia(valor1);
      console.log(valor1 + " ^ 2 " + " = " + respostaPotencia + "\n");
      return outraOperacao();
    default:
      console.log("Informe uma operação válida! \n");
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
      return false;
    default:
      console.log("Digite uma entrada válida");
  }
}

interface();
