const countries = require('./countries.json');

module.exports = {
  getAllCountries: () => countries,
  getCountryById: (id) => countries.find(country => country.id === id),
  getCountryByName: (name) => countries.find(country => country.name.toLowerCase() === name.toLowerCase()),
  getCountryByShortName: (shortName) => countries.find(country => country.shortName.toUpperCase() === shortName.toUpperCase()),
  getCountryByCode: (code) => countries.find(country => country.code === code)
};