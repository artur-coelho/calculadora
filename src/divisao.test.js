/* eslint-disable no-undef */
const divisao = require("./divisao");

test("Espera certo resultado da da divisão", () => {
  expect(divisao(7777777, 7)).toBe(1111111);
});
