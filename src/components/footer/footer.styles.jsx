import styled from "styled-components";

export const FooterContainer = styled.div`
  min-height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: solid 1px white;

  @media screen and (max-width: 850px) {
    min-height: 10vh;
  }

`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 150px;
  padding-top: 30px;

  @media screen and (max-width: 850px) {
    padding-top: 25px;
  }

  @media screen and (max-width: 480px) {
    gap: 30px;
    padding: 25px 0;
  }
`;

export const LinkContainer = styled.a`
  font-size: 16px;

  @media screen and (max-width: 850px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const CopyrightTextContainer = styled.p`
  font-size: 12px;
  margin-top: auto;

  @media screen and (max-width: 850px) {
    font-size: 11px;
  }

  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;
