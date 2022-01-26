const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((idAnimal) => ids.includes(idAnimal.id));
}

// console.log(getSpeciesByIds('533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'));
module.exports = getSpeciesByIds;
