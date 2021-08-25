import styled from "styled-components";

export const ComparisonPageContainer = styled.div`
  min-height: 90vh;
  padding: 15vh 15vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;

  @media screen and (max-width: 850px) {
    min-height: 85vh;
    padding: 0;
  }

  @media screen and (max-width: 480px) {
    gap: 20px;
  }
`;

export const ProductToCompareText = styled.p`
  margin: 0;
  font-size: 22px;
  text-align: center;

  @media screen and (max-width: 850px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ListsContainer = styled.div`
  display: flex;
  min-width: 60vw;
  justify-content: space-between;
  align-items: center;
  margin: 10vh;

  @media screen and (max-width: 850px) {
    min-width: 90vw;
    gap: 35px;
    justify-content: center;
  }

  @media screen and (max-width: 480px) {
    min-width: 95vw;
    gap: 20px;
  }
`;
