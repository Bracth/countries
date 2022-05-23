import DarkMode from "./DarkMode";
import StyledHeader from "./StyledHeader";
import Title from "./Title";

const Header = () => {
  return (
    <StyledHeader>
      <Title>Where in the world?</Title>
      <DarkMode>
        <i className="fa-regular fa-moon"></i>Dark Mode
      </DarkMode>
    </StyledHeader>
  );
};

export default Header;
