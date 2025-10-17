# 🌍 country-code-data

**country-code-data** is a lightweight, ready-to-use JSON dataset containing all **countries**, their **ISO codes**, **international phone codes**, and **flag image URLs**.  
It’s perfect for developers building **forms**, **country selectors**, **phone input fields**, or **global applications** that need standardized country information.

---

## 🚀 Why use country-code-data?

✅ 200+ countries included  
✅ ISO 3166 country codes  
✅ International calling/phone codes  
✅ Country flags via reliable [flagcdn.com](https://flagcdn.com)  
✅ Simple JSON structure — no dependencies  
✅ Works in **JavaScript**, **TypeScript**, **React**, **Node.js**, **Next.js**, and **Vue**

---

## 📦 Installation

Install the package using npm:

```bash
npm install country-code-data
```

---

## 🧩 Usage Examples

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

### 1️⃣ Create a Country Dropdown (React)
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
  "id": 1,
  "name": "Afghanistan",
  "shortName": "AF",
  "code": "+93",
  "flag": "https://flagcdn.com/w40/af.png"
}
```

Fields:
| Field | Description |
|-------|--------------|
| `id` | Auto-incremented unique ID |
| `name` | Full country name |
| `shortName` | ISO 3166-1 alpha-2 code |
| `code` | International phone calling code |
| `flag` | URL of the country’s flag image |

---

## 🌐 Use Cases

- 🌎 **Country dropdowns** for web or mobile apps  
- 📞 **Phone input selectors** with country flags  
- 💡 **APIs and data services** that require global country info  
- 🧠 **Educational or data visualization** projects  
- ⚙️ **Internationalization (i18n)** in apps

---

## ⚡ Performance & Size

- File size: **~35 KB (minified)**  
- Dependencies: **None**  
- Format: **Plain JSON**  
- Compatible with: **ESM & CommonJS**

---

## License

MIT