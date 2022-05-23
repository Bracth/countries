import { useEffect } from "react";
import Container from "./Container";

import Countrie from "./countrie/Countrie";
import { getCountries } from "./service";
import UserInputs from "./user-inputs/UserInput";

const CountrieList = () => {
  useEffect(() => {
    // getCountries().then((response) => console.log(response));
  }, []);

  return (
    <Container>
      <UserInputs></UserInputs>
      <Countrie></Countrie>
    </Container>
  );
};

export default CountrieList;
