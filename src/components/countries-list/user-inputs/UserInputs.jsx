import Dropdown from "./Dropdown";
import InputsContainers from "./InputsContainer";
import StyledSearchInput from "./StyledSearchInput";

const UserInputs = ({ handleFilters, filters }) => {
  const handleChange = (event) => {
    const newFilters = () => {
      return { ...filters, [event.target.name]: event.target.value };
    };
    handleFilters(newFilters());
  };

  return (
    <InputsContainers>
      <StyledSearchInput
        name="search"
        value={filters.search}
        onChange={handleChange}
        type="text"
        placeholder="	Searh for a country..."
      />
      <Dropdown handleChange={handleChange}></Dropdown>
    </InputsContainers>
  );
};

export default UserInputs;
