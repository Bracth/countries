import InputsContainers from "./InputsContainer";
import StyledSearchInput from "./StyledSearchInput";
import StyledSelectInput from "./StyledSelectInput";

const UserInputs = () => {
  return (
    <InputsContainers>
      <StyledSearchInput type="text" placeholder="	Searh for a country..." />
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
