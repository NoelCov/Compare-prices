import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 3vw;
  min-height: 10vh;
  border-bottom: 1px solid white;

  @media screen and (max-width: 850px) {
    min-height: 8vh;
  }
`;

export const TitleSubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const NavBarTitle = styled.p`
  font-size: 25px;
  margin: 0;

  @media screen and (max-width: 850px) {
    font-size: 22px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const SubTitle = styled.p`
  font-size: 15px;
  margin: 0;
  color: #cd55c1;

  
  @media screen and (max-width: 850px) {
    font-size: 13px;
  }

  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

export const LinksContainer = styled.div`
  margin-left: auto;
  display: flex;
  gap: 30px;

  @media screen and (max-width: 480px) {
    gap: 10px;
  }
`;

export const LinkContainer = styled.a`
  font-size: 16px;

  @media screen and (max-width: 850px) {
    font-size: 14px;
  }
`;

export const EmailContainer = styled.a`
  font-size: 16px;

  @media screen and (max-width: 850px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
` 
