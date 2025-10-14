# Country Code Data

A simple npm package providing a list of countries with their names, short names, phone codes, and flag URLs.

## Installation

Install the package using npm:

```bash
npm install country-code-data
```

## Usage

```javascript
const countryData = require('country-code-data');

// Get all countries
const allCountries = countryData.getAllCountries();
console.log(allCountries);

// Get country by ID
const countryById = countryData.getCountryById(1);
console.log(countryById); // Afghanistan

// Get country by name
const countryByName = countryData.getCountryByName('Brazil');
console.log(countryByName);

// Get country by short name
const countryByShortName = countryData.getCountryByShortName('US');
console.log(countryByShortName);

// Get country by code
const countryByCode = countryData.getCountryByCode('+44');
console.log(countryByCode); // United Kingdom
```

## Data Structure

Each country object contains:

- `id`: Unique identifier (number)
- `name`: Full country name (string)
- `shortName`: Two-letter country code (string)
- `code`: Phone country code (string)
- `flag`: URL to the country flag image (string)

## License

MIT