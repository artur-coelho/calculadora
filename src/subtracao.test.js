/* eslint-disable no-undef */
const subtracao = require("./subtracao");

test("Espera certo resultado após a subtração de dois números", () => {
  expect(subtracao(987654321, 123456789)).toBe(864197532);
});
