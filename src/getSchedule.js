const data = require('../data/zoo_data');
// console.log(data);
// console.log(data.species.filter(({ availability }) => availability.includes('Tuesday')).map(({ name }) => name));
const arrayDias = Object.keys(data.hours);
const arrayAnimais = data.species.map((elemento) => elemento.name);
const x = (scheduleTarget) => {
  const dias = arrayDias.reduce((acc, dia) => {
    acc[dia] = {
      officeHour: `Open from ${data.hours[dia].open}am until ${data.hours[dia].close}pm`,
      exhibition: data.species.filter(({ availability }) => availability
        .includes(dia)).map(({ name }) => name),
    };
    return acc;
  }, {});
  dias.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return dias;
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (arrayDias.includes(scheduleTarget)) {
    return ({ [`${scheduleTarget}`]: x(scheduleTarget)[`${scheduleTarget}`] });
  }
  if (arrayAnimais.includes(scheduleTarget)) {
    return data.species.find(({ name: n, availability }) => n === scheduleTarget).availability;
  }
  return x(scheduleTarget);
}

console.log(getSchedule());

//
// return {
//   'Tuesday': {
//     'officeHour': 'Open from 8am until 6pm',
//     'exhibition': [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
//   },
//   'Wednesday': {
//     'officeHour': 'Open from 8am until 6pm',
//     'exhibition': [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ],
//   },
//   'Thursday': {
//     'officeHour': 'Open from 10am until 8pm',
//     'exhibition': [ 'lions', 'otters', 'frogs', 'snakes', 'giraffes' ],
//   },
//   'Friday': {
//     'officeHour': 'Open from 10am until 8pm',
//     'exhibition': [ 'tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes' ],
//   },
//   'Saturday': {
//     'officeHour': 'Open from 8am until 10pm',
//     'exhibition': [
//       'lions',  'tigers',
//       'bears',  'penguins',
//       'otters', 'frogs',
//       'snakes', 'elephants',
//     ],
//   },
//   'Sunday': {
//     'officeHour': 'Open from 8am until 8pm',
//     'exhibition': [ 'lions', 'bears', 'penguins', 'snakes', 'elephants' ],
//   },
//   'Monday': { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' },
// };

module.exports = getSchedule;
