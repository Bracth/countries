import styled from "styled-components";

const CountriesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
  padding: 1rem;

  @media (min-width: 480px) {
    column-gap: 5rem;
  }
`;

export default CountriesContainer;
