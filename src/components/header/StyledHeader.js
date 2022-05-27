import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  padding: 2rem 1rem 2rem 1rem;
  justify-content: space-between;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    padding: 1.5rem 3rem 1.5rem 3rem;
    margin-bottom: 2.5rem;
  }
`;

export default StyledHeader;
