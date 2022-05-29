import Dropdown from "./Dropdown";
import InputsContainers from "./InputsContainer";
import StyledSearchInput from "./StyledSearchInput";

const UserInputs = ({ handleFilters, filters }) => {
  const handleChange = (event) => {
    const newFilters = () => {
      if (event.target.type === "radio") {
        if (event.target.value === filters.region) {
          return { ...filters, region: null };
        }
      }
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
        placeholder="Search for a country..."
      />
      <Dropdown
        handleChange={handleChange}
        actualRegion={filters.region}
      ></Dropdown>
    </InputsContainers>
  );
};

export default UserInputs;
