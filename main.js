// main.js

function calcularGastoCombustivel(distanciaEmMetros, tipoCombustivel) {
  if (distanciaEmMetros < 0 || (tipoCombustivel !== "gasolina" && tipoCombustivel !== "etanol")) {
    throw new Error("Parâmetros inválidos");
  }

  const taxaConsumo = tipoCombustivel === "gasolina" ? 16 : 11;
  const distanciaEmKm = distanciaEmMetros / 1000;
  const litrosNecessarios = distanciaEmKm / taxaConsumo;
  return Math.ceil(litrosNecessarios);
}

module.exports = calcularGastoCombustivel;
