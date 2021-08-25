import styled, { css } from "styled-components";

const textStyles = css`
  margin: 0;
  font-size: 20px;
  display: inline;
  line-height: 1.7;

  @media screen and (max-width: 850px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  ${textStyles};
`;

export const ColoredText = styled.span`
  ${textStyles};
  color: #cd55c1;
`;