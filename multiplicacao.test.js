const multiplicacao = require("./multiplicacao");

test("Espera certo resultado da da multiplicação", () => {
  expect(multiplicacao(12345, 6789)).toBe(83810205);
});
