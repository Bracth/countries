import { useState } from "react";
import ContainerDropdown from "./ContainerDropdown";
import DropdownButton from "./DropdownButton";
import DropdownMenu from "./DropdownMenu";

const Dropdown = ({ handleChange }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  const regions = ["africa", "americas", "asia", "europe", "oceania"];

  return (
    <ContainerDropdown>
      <DropdownButton onClick={handleClick}>
        <p>Filter by region</p>
        <i className="fa-solid fa-angle-down"></i>
      </DropdownButton>
      {showDropdown && (
        <DropdownMenu>
          {regions.map((region) => (
            <div key={region}>
              <label htmlFor={region}>{region}</label>
              <input
                value={region}
                onChange={handleChange}
                type="radio"
                name="region"
                id={region}
              />
            </div>
          ))}
        </DropdownMenu>
      )}
    </ContainerDropdown>
  );
};

export default Dropdown;
