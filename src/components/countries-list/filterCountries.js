const filterCountries = (countries, filter) => {
  const filteredCountries = countries.filter((countrie) =>
    countrie.name.toLowerCase().includes(filter.toLowerCase())
  );
  return filteredCountries;
};

export default filterCountries;
