import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../store/darkModeSlice";
import DarkMode from "./DarkMode";
import StyledHeader from "./StyledHeader";
import Title from "./Title";

const Header = () => {
  const isDarkModeOn = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();

  return (
    <StyledHeader>
      <Title>Where in the world?</Title>
      <DarkMode onClick={() => dispatch(changeMode())}>
        <i className="fa-regular fa-moon"></i>Dark Mode
      </DarkMode>
    </StyledHeader>
  );
};

export default Header;
