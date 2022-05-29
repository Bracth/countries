import styled from "styled-components";

const DropdownMenu = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  border-radius: 2%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-top: 0.3rem;
  background-color: white;
  padding: 1.5rem 1rem 1.5rem 1rem;
  font-weight: 600;
  font-size: 0.8rem;

  div {
    width: 100%;
    cursor: pointer;
  }

  label {
    width: 100%;
  }

  input {
    display: none;
  }

  label:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  @media (min-width: 768px) {
    top: 3rem;
    font-size: 1rem;
  }
`;

export default DropdownMenu;
