const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id1) {
  // seu código aqui
  const idAnimal = data.employees.find(({ id }) => id === id1).responsibleFor[0];
  const resident = data.species
    .find(({ id: idSpecie }) => idSpecie === idAnimal)
    .residents;
  const sort = resident.sort((a, b) => {
    if (a.age < b.age) {
      return 1;
    }
    if (a.age > b.age) {
      return -1;
    }
    return 0;
  });
  return [sort[0].name, sort[0].sex, sort[0].age];
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
