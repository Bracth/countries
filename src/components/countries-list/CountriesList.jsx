import { useEffect, useState, useMemo } from "react";
import Container from "./Container";

import Countrie from "./countrie/Countrie";
import CountriesContainer from "./CountriesContainer";
import filterCountries from "./filterCountries";
import { getCountries } from "./service";
import UserInputs from "./user-inputs/UserInputs";

const CountrieList = () => {
  const [countries, setCountries] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    region: null,
  });

  const handleFilters = (newFilters) => {
    setFilters(newFilters);
  };

  useEffect(() => {
    getCountries().then((response) => setCountries(response));
  }, [setCountries]);

  const filteredCountries = filterCountries(countries, filters);

  return (
    <Container>
      <UserInputs handleFilters={handleFilters} filters={filters}></UserInputs>
      <CountriesContainer>
        {filteredCountries.length > 0 &&
          filteredCountries.map((countrie) => {
            return (
              <Countrie key={countrie.name} countrie={countrie}></Countrie>
            );
          })}
      </CountriesContainer>
    </Container>
  );
};

export default CountrieList;
