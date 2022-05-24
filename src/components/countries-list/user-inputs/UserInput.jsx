import { useState } from "react";
import InputsContainers from "./InputsContainer";
import StyledSearchInput from "./StyledSearchInput";
import StyledSelectInput from "./StyledSelectInput";

const UserInputs = ({ handleFilters }) => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
    handleFilters(search);
  };

  return (
    <InputsContainers>
      <StyledSearchInput
        value={search}
        onChange={handleChange}
        type="text"
        placeholder="	Searh for a country..."
      />
      <StyledSelectInput name="region" id="region">
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="europa">Europa</option>
        <option value="asia">Asia</option>
        <option value="oceania">Oceania</option>
      </StyledSelectInput>
    </InputsContainers>
  );
};

export default UserInputs;
