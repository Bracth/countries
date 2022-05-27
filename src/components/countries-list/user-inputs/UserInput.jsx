import { useState } from "react";
import Dropdown from "./Dropdown";
import InputsContainers from "./InputsContainer";
import StyledSearchInput from "./StyledSearchInput";

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
      <Dropdown></Dropdown>
    </InputsContainers>
  );
};

export default UserInputs;
