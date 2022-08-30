const SEARCH_COUNTRIES_URL = 'https://restcountries.com/v3.1/name/';

const countrySearchOptions = {
  countryName: 'name',
  capital: 'capital',
  population: 'population',
  languages: 'languages',
  flags: 'flags',
};

export function fetchCountries(country) {
  const { countryName, capital, population, languages, flags } =
    countrySearchOptions;

  return fetch(
    `${SEARCH_COUNTRIES_URL}${country}?fields=${countryName},${capital},${population},${languages},${flags}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
