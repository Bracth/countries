import styled from "styled-components";

const StyledSearchInput = styled.input`
  width: 100%;
  height: 3rem;
  border: none;
  border-radius: 2%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-bottom: 1rem;
  padding-left: 3rem;

  @media (min-width: 768px) {
    width: 30%;
  }
`;

export default StyledSearchInput;
