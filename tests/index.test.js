const countryData = require('../index');

describe('Country Code Data', () => {
  test('should return all countries', () => {
    expect(countryData.getAllCountries().length).toBe(201);
  });

  test('should find country by ID', () => {
    expect(countryData.getCountryById(1).name).toBe('Afghanistan');
  });

  test('should find country by name', () => {
    expect(countryData.getCountryByName('Brazil').shortName).toBe('BR');
  });

  test('should find country by short name', () => {
    expect(countryData.getCountryByShortName('US').code).toBe('+1');
  });

  test('should find country by code', () => {
    expect(countryData.getCountryByCode('+44').name).toBe('United Kingdom');
  });
});