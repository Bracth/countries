import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { getCountrie } from "../store/countriesSlice";
import ButtonStyled from "./ButtonStyled";
import BackButtonContainer from "./BackButtonContainer";
import Countrie from "./Countrie";
import { Link } from "react-router-dom";

const CountrieDetail = () => {
  const countrieName = useParams();
  const countrie = useSelector(getCountrie(countrieName));
  console.log(countrie);

  return (
    <>
      <BackButtonContainer>
        <Link to="/">
          <ButtonStyled>
            <i className="fa-solid fa-arrow-left-long"></i>Back
          </ButtonStyled>
        </Link>
      </BackButtonContainer>
      <Countrie countrie={countrie} />
    </>
  );
};

export default CountrieDetail;
