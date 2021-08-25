import styled from "styled-components";

export const AboutPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 90vh;
  padding: 0 10vw;
  gap: 50px;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ContentContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TextContainer = styled.div`
  font-size: 16px;
  line-height: 1.5;
  text-align: center;

  @media screen and (max-width: 850px) {
    padding: 0 8vw;
    }

  @media screen and (max-width: 480px) {
    padding: 0 2vw;
    font-size: 14px;
  } 
`

export const LinkContainer = styled.a`
  color: #cd55c1;
`;

export const ImageContainer = styled.img`
  src: ${(props) => props.img};
  height: 450px;
  width: auto;

  @media screen and (max-width: 850px) {
    height: 350px;
  }

  @media screen and (max-width: 480px) {
    height: 220px;
  }
`;
