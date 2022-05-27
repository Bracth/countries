import { useState } from "react";
import ContainerDropdown from "./ContainerDropdown";
import DropdownButton from "./DropdownButton";
import DropdownMenu from "./DropdownMenu";

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <ContainerDropdown>
      <DropdownButton onClick={handleClick}>
        <p>Filter by region</p>
        <i className="fa-solid fa-angle-down"></i>
      </DropdownButton>
      {showDropdown && (
        <DropdownMenu>
          <label htmlFor="africa">Africa</label>
          <input type="radio" name="region" id="africa" />

          <label htmlFor="americas">Americas</label>
          <input type="radio" name="region" id="americas" />

          <label htmlFor="Asia">Asia</label>
          <input type="radio" name="region" id="Asia" />

          <label htmlFor="europe">Europe</label>
          <input type="radio" name="region" id="europe" />

          <label htmlFor="oceania">Oceania</label>
          <input type="radio" name="region" id="oceania" />
        </DropdownMenu>
      )}
    </ContainerDropdown>
  );
};

export default Dropdown;
