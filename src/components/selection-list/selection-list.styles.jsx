import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export const StyledListItem = styled(ListItem)`
  text-align: center !important;
  ${(props) => props.active && "border: 1px solid #cd55c1 !important;"}
`;

export const StyledListItemText = styled(ListItemText)`
  font-family: "Montserrat" !important;
  font-size: 16px;

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
