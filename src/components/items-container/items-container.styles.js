import styled from "styled-components";

export const ItemsContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 40px;
  justify-content: center;
  margin: 5vh 0 10vh;
  border: 1px solid #cd55c1;
  padding: 20px 10px;
  min-width: 40vw;

  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    max-width: 42vw;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    max-width: 38vw;
    gap: 15px;
  }
`;
