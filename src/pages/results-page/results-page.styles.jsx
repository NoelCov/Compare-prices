import styled from "styled-components";

export const ResultsPageContainer = styled.div`
  min-height: 90vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 0 5vw;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 850px) {
    padding: 0;
  }
`;

export const ResultsPageTitle = styled.h2`
  padding: 5vh 0 0;
  font-size: 26px;
  margin: 5vh 0 15vh;
  color: #cd55c1;

  @media screen and (max-width: 850px) {
    font-size: 22px;
    margin: 5vh 0 10vh;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    width: 80vw;
    text-align: center;
  }

`;

export const ComparisonStoresContainer = styled.div`
  display: flex;
  gap: 150px;

  @media screen and (max-width: 850px) {
    gap: 50px;
  }

  @media screen and (max-width: 480px) {
    gap: 30px;
  }
`;

export const StoreTitle = styled.p`
  font-size: 24px;
  margin: 0;
  text-align: center;


  @media screen and (max-width: 850px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const StoreContainer = styled.div`
`;
