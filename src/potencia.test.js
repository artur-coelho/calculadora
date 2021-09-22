const potencia = require("./potencia");

test("Espera certo resultado da potenciação", () => {
  expect(potencia(1234)).toBe(1522756);
});
