import styled from "styled-components";

export const ButtonContainer = styled.div`
  padding: 15px 20px;
  background-color: #cd55c1;
  font-size: 20px;
  width: 200px;
  border-radius: 2px;
  text-align: center;
  cursor: pointer;

  @media screen and (max-width: 850px) {
    font-size: 16px;
    padding: 12px 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
    width: 150px;
  } 
`;
