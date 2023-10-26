// test.js

const calcularGastoCombustivel = require('./main');

// Teste 1: Calcular gasto de combustível com gasolina
test('Calcula gasto de combustível com gasolina', () => {
  expect(calcularGastoCombustivel(16000, 'gasolina')).toBe(1); // 16 km com 1 litro de gasolina
});

// Teste 2: Calcular gasto de combustível com etanol
test('Calcula gasto de combustível com etanol', () => {
  expect(calcularGastoCombustivel(11000, 'etanol')).toBe(1); // 11 km com 1 litro de etanol
});

// Teste 3: Parâmetros inválidos - distância negativa
test('Parâmetros inválidos - distância negativa', () => {
  expect(() => calcularGastoCombustivel(-10000, 'gasolina')).toThrow();
});

// Teste 4: Parâmetros inválidos - tipo de combustível inválido
test('Parâmetros inválidos - tipo de combustível inválido', () => {
  expect(() => calcularGastoCombustivel(10000, 'diesel')).toThrow();
});
