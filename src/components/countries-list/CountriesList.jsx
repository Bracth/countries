import { useEffect, useState } from "react";
import Container from "./Container";

import Countrie from "./countrie/Countrie";
import CountriesContainer from "./CountriesContainer";
import { getCountries } from "./service";
import UserInputs from "./user-inputs/UserInput";

const CountrieList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then((response) => setCountries(response));
  }, [setCountries]);

  console.log(countries);

  return (
    <Container>
      <UserInputs></UserInputs>
      <CountriesContainer>
        {countries.length > 0 &&
          countries.map((countrie) => {
            return <Countrie countrie={countrie}></Countrie>;
          })}
      </CountriesContainer>
    </Container>
  );
};

export default CountrieList;
