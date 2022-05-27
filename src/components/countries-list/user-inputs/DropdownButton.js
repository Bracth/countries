import styled from "styled-components";

const DropdownButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  padding: 1rem 1.5rem 1rem 1.5rem;
  font-size: 0.8rem;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export default DropdownButton;
