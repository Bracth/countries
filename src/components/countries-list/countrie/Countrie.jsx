import BodyCardContainer from "./BodyCardContainer";
import CountrieCard from "./CountrieCard";
import Image from "./Image";
import ImageContainer from "./ImageContainer";
import StyledLink from "./StlyledLink";

const Countrie = ({ countrie }) => {
  const { flag, name, capital, population, region } = countrie;
  return (
    <StyledLink to={`/${name}`}>
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
    </StyledLink>
  );
};

export default Countrie;
