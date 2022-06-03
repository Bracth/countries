import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCountrie, getCountrie } from "../store/countriesSlice";
import ButtonStyled from "./ButtonStyled";
import BackButtonContainer from "./BackButtonContainer";
import Countrie from "./Countrie";
import { Link } from "react-router-dom";

const CountrieDetail = () => {
  const { countrieName } = useParams();
  const countrie = useSelector(getCountrie(countrieName));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountrie(countrieName));
  }, [dispatch, countrieName]);

  return (
    <>
      <BackButtonContainer>
        <Link to="/">
          <ButtonStyled>
            <i className="fa-solid fa-arrow-left-long"></i>Back
          </ButtonStyled>
        </Link>
      </BackButtonContainer>
      {countrie && <Countrie countrie={countrie} />}
    </>
  );
};

export default CountrieDetail;
