import BodyCardContainer from "./BodyCardContainer";
import CountrieCard from "./CountrieCard";
import Image from "./Image";
import ImageContainer from "./ImageContainer";

const Countrie = ({ countrie }) => {
  const { flag, name, capital, population, region } = countrie;
  return (
    <CountrieCard>
      <ImageContainer>
        <Image src={flag}></Image>
      </ImageContainer>
      <BodyCardContainer>
        <h2>{name}</h2>
        <p>
          Population:
          <span>{population}</span>
        </p>
        <p>
          Region:
          <span>{region}</span>
        </p>
        <p>
          Capital:
          <span>{capital}</span>
        </p>
      </BodyCardContainer>
    </CountrieCard>
  );
};

export default Countrie;
