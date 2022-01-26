const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName) {
    const buscaPessoa = data.employees
      .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);
    return buscaPessoa;
  }
  return {};
}

module.exports = getEmployeeByName;
