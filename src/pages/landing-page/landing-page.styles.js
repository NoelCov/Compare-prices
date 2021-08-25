import styled from "styled-components";

export const LandingPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15vw;
  min-height: 85vh;

  @media screen and (max-width: 850px) {
    gap: 80px;
    justify-content: center;
    min-height: 80vh;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5vh 0;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 30vw;

  @media screen and (max-width: 850px) {
    width: 35vw;
  }

  @media screen and (max-width: 480px) {
    width: 65vw;
    gap: 10px;
  } 
`;

export const ImageContainer = styled.img`
  height: 550px;
  width: auto;
  src: ${props => props.src};

  @media screen and (max-width: 850px) {
    height: 450px;
  }

  @media screen and (max-width: 480px) {
    height: 300px;
    width: 65vw;
  }
`;