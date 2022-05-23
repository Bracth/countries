import { useEffect } from "react";
import Container from "./Container";

import Countrie from "./countrie/Countrie";
import CountriesContainer from "./CountriesContainer";
import { getCountries } from "./service";
import UserInputs from "./user-inputs/UserInput";

const CountrieList = () => {
  useEffect(() => {
    // getCountries().then((response) => console.log(response));
  }, []);

  const countrie = {
    flag: "https://flagcdn.com/ve.svg",
    capital: "Caracas",
    name: "Venezuela",
    population: 28435943,
    region: "Americas",
  };

  return (
    <Container>
      <UserInputs></UserInputs>
      <CountriesContainer>
        <Countrie countrie={countrie}></Countrie>
      </CountriesContainer>
    </Container>
  );
};

export default CountrieList;
