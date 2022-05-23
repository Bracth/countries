import { useEffect } from "react";

import Countrie from "./countrie/Countrie";
import { getCountries } from "./service";
import UserInputs from "./user-inputs/UserInput";

const CountrieList = () => {
  useEffect(() => {
    // getCountries().then((response) => console.log(response));
  }, []);

  return (
    <>
      <UserInputs></UserInputs>
      <Countrie></Countrie>
    </>
  );
};

export default CountrieList;
