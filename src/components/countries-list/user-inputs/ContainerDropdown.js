import styled from "styled-components";

const ContainerDropdown = styled.div`
  position: relative;
  width: 50%;
  height: 3rem;
  border: none;
  border-radius: 2%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-top: 1rem;

  @media (min-width: 640px) {
    width: 40%;
    margin-top: 0;
  }

  @media (min-width: 768px) {
    width: 30%;
    margin-top: 0;
  }

  @media (min-width: 1080px) {
    width: 15%;
    margin-top: 0;
  }
`;

export default ContainerDropdown;
