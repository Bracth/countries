import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../store/countriesSlice";
import Container from "./Container";

import Countrie from "./countrie/Countrie";
import CountriesContainer from "./CountriesContainer";
import filterCountries from "./filterCountries";
import UserInputs from "./user-inputs/UserInputs";

const CountrieList = () => {
  const [filters, setFilters] = useState({
    search: "",
    region: null,
  });

  const dispatch = useDispatch();

  const handleFilters = (newFilters) => {
    setFilters(newFilters);
  };

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const countries = useSelector((state) => state.countries.countriesList);

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
