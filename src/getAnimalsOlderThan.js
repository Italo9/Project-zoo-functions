const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age1) {
  // seu código aqui
  const especie = data.species.find(({ name }) => name === animal);
  const idadeMinima = especie.residents.every(({ age }) => age > age1);
  return idadeMinima;
}

module.exports = getAnimalsOlderThan;
