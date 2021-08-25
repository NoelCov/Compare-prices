import styled from "styled-components";

export const StyledInputContainer = styled.input`
  border: none;
  background-color: #272c34;
  border-bottom: 1px solid white;
  font-size: 18px;
  text-align: center;
  width: 300px;
  color: white;
  height: 40px;

  &:focus {
    border: 1px solid #cd55c1;
    box-shadow: none;
    outline: none;
}

@media screen and (max-width: 480px) {
  font-size: 14px;
  width: 260px;
}
`;

