import styled from "styled-components";

const StyledSelectInput = styled.select`
  height: 3rem;
  width: 50%;
  border: none;
  border-radius: 2%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-top: 1rem;
  padding-left: 1.2rem;
  @media (min-width: 768px) {
    width: 20%;
  }
`;

export default StyledSelectInput;
