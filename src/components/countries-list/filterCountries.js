const filterCountries = (countries, { search, region }) => {
  let filterCountries = countries;

  if (region) {
    filterCountries = filterCountries.filter(
      (countrie) => countrie.region === region
    );
  }

  filterCountries = filterCountries.filter((countrie) =>
    countrie.name.toLowerCase().includes(search.toLowerCase())
  );

  return filterCountries;
};

export default filterCountries;
