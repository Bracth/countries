import styled from "styled-components";

const DarkMode = styled.span`
  align-self: center;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
  button {
    background-color: transparent;
    border: none;
  }
`;

export default DarkMode;
