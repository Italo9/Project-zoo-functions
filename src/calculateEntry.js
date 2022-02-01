const data = require('../data/zoo_data');

const { prices } = data;

const verificaArray = (entrants) => {
  const comparacao = entrants.reduce((acc, { age }) => {
    if (age < 18) {
      acc.child += 1;
    }
    if (age >= 18 && age < 50) {
      acc.adult += 1;
    } else if (age >= 50) {
      acc.senior += 1;
    }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
  return comparacao;
};

const verificaParametro = (entrants) => {
  if (!entrants || (Object.keys(entrants).length === 0 && entrants.constructor === Object)) {
    return 0;
  }
};

function countEntrants(entrants) {
  // seu código aqui
  if (entrants) {
    return verificaArray(entrants);
  }
}

function calculateEntry(entrants) {
  // SE O PARAMETRO FOR {} OU SE NAO EXISTIR PARAMETRO RETORNE 0
  // passar a funçao que cria a lista do quantitativo de pessoas
  // SOMATORIO DOS PRECOS DO QUANTITATIVO DE PESSOAS
  if (verificaParametro(entrants) === 0) {
    return verificaParametro(entrants);
  }
  const objetoPessoas = countEntrants(entrants);
  return (((objetoPessoas.child * prices.child) + (objetoPessoas.adult * prices.adult)
    + (objetoPessoas.senior * prices.senior)));
}

module.exports = { calculateEntry, countEntrants };
