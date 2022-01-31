const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui erro avaliador
  if (animal && !animal.sex) {
    return data.species.find(({ name }) => name === animal.specie).residents.length;
  } if (animal && animal.sex) {
    return data.species.find(({ name }) => name === animal.specie)
      .residents.filter(({ sex }) => sex === animal.sex).length;
  }
  return data.species.reduce((acc, { name, residents }) => {
    acc[name] = residents.length;
    return acc;
  }, {});
}

module.exports = countAnimals;
