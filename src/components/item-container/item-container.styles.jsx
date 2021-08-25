import styled, { css } from "styled-components";

const titlePriceStyles = css`
  margin: 0;
  font-size: 15px;

  @media screen and (max-width: 850px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  max-width: 300px;
  max-height: 280px;
  text-align: center;

  @media screen and (max-width: 850px) {
    min-width: 150px;
    min-height: 260px;
  }
`;
export const ImageContainer = styled.img`
  max-width: 100%;
  position: relative;
  min-height: 150px;
  margin-bottom: 5px;

  @media screen and (max-width: 850px) {
    max-width: 80%;
    min-height: 120px;
  }
`;

export const ProductTitle = styled.p`
  ${titlePriceStyles};
  width: 150px;
`;

export const ProductPrice = styled.p`
  ${titlePriceStyles};
`;
