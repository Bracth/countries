import BodyCardContainer from "./BodyCardContainer";
import CountrieCard from "./CountrieCard";
import Image from "./Image";
import ImageContainer from "./ImageContainer";

const Countrie = ({ countrie }) => {
  const {
    name,
    flag,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
  } = countrie;

  return (
    <CountrieCard>
      <ImageContainer>
        <Image src={flag}></Image>
      </ImageContainer>
      <BodyCardContainer>
        <div>
          <h2>{name}</h2>
          <p>
            Native Name:<span>{nativeName}</span>
          </p>
          <p>
            Population:<span>{population}</span>
          </p>
          <p>
            Region:
            <span>{region}</span>
          </p>
          <p>
            Sub Region:<span>{subregion}</span>
          </p>
          <p>
            Capital:
            <span> {capital}</span>
          </p>
        </div>
        <div>
          <p>
            Top Level Domain:<span>{topLevelDomain}</span>
          </p>
          <p>
            Currencies:
            {currencies.map((currencie) => (
              <span key={currencie}>{currencie.name}</span>
            ))}
          </p>
          <p>
            Languagues:
            {languages.map((language) => (
              <span key={language}>{language.name}</span>
            ))}
          </p>
        </div>
        <h3>Border Countries:</h3>
      </BodyCardContainer>
    </CountrieCard>
  );
};

export default Countrie;
