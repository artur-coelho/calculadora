/* eslint-disable no-undef */
const soma = require("./soma");

test("Esepera que a soma de dois número seja igual a certo resultado", () => {
  expect(soma(123456789, 987654321)).toBe(1111111110);
});
