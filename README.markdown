# 🌍 Country Code Data - Complete Country List & ISO Codes NPM Package

[![npm version](https://img.shields.io/npm/v/country-code-data.svg)](https://www.npmjs.com/package/country-code-data)
[![npm downloads](https://img.shields.io/npm/dm/country-code-data.svg?cacheSeconds=86400)](https://www.npmjs.com/package/country-code-data)
[![license](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)


**[📖 View Interactive Demo & Documentation](https://shodorsonnath.github.io/country-code-data/)**

<!-- rest of your README -->

**country-code-data** is a lightweight npm package providing a complete dataset of all countries. Includes country names, ISO codes, international phone codes, capital cities, currencies, official languages, and flag images. Ideal for building forms, country selectors, phone input fields, or any international application.

---

## 🚀 Features of Country Code Data

✅ 200+ countries included  
✅ ISO 3166 country codes  
✅ International calling/phone codes  
✅ Country flags via reliable [flagcdn.com](https://flagcdn.com)
✅ Capital City name for each country  
✅ Currency codes, names, and symbols included
✅ Official languages for each country
✅ Simple JSON structure — no dependencies  
✅ Works in **JavaScript**, **TypeScript**, **React**, **Node.js**, **Next.js**, and **Vue**

---

## 📦 Install Country Code Data

Install the package using npm:

```bash
npm install country-code-data
```

---

## 🧩 How to Use Country Code Data

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

---

### 1️⃣ Create a Country Dropdown (React/Next.js)
```jsx
import countryData from "country-code-data";

export default function CountrySelect() {
const countries = countryData.getAllCountries(); 

  return (
    <select>
      {countryData.map(country => (
        <option key={country.shortName} value={country.shortName}>
          {country.name} ({country.code})
        </option>
      ))}
    </select>
  );
}
```
---

## 📊 Data Structure

Each country entry looks like this:
```json
  {
    "id": 14,
    "name": "Bangladesh",
    "shortName": "BD",
    "code": "+880",
    "flag": "https://flagcdn.com/w40/bd.png",
    "capital": "Dhaka",
    "currency": {
      "code": "BDT",
      "name": "Bangladeshi Taka",
      "symbol": "৳"
    },
    "languages": ["Bengali"]
  }
```

| Field        | Description                                                        |
| ------------ | ------------------------------------------------------------------ |
| `id`         | Auto-incremented unique ID                                         |
| `name`       | Full country name                                                  |
| `shortName`  | ISO 3166-1 alpha-2 code                                            |
| `code`       | International phone calling code                                   |
| `flag`       | URL of the country’s flag image                                    |
| `capital`    | Capital of the country’s                                           |
| `currency`   | Object containing the country’s currency details:                  |
|     `code`   | ISO 4217 currency code (e.g., "BDT")                               |
|     `name`   | Full currency name (e.g., "Bangladeshi Taka")                      |
|     `symbol` | Currency symbol (e.g., "৳")                                        |
| `languages`  | Array of official or widely spoken languages (e.g., `["Bengali"]`) |


---

## 🌐 Use Cases for Country Data

- 🌎 **Country dropdowns** for web or mobile apps  
- 📞 **Phone input selectors** with country flags  
- 💡 **APIs and data services** that require global country info  
- 🧠 **Educational or data visualization** projects  
- ⚙️ **Internationalization (i18n)** in apps

---

## ⚡ Performance & Size

- File size: **~48 KB (minified)**  
- Dependencies: **None**  
- Format: **Plain JSON**  
- Compatible with: **ESM & CommonJS**

---

## License

MIT