import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import { StyledListItem, StyledListItemText } from "./selection-list.styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#272c34",
    color: "white",
  },
}));

const SelectionList = ({
  currentSelection,
  setCurrentSelection,
  selectionListNum,
}) => {
  const classes = useStyles();

  const handleClick = (newValue) => {
    setCurrentSelection((prevState) => {
      return {
        ...prevState,
        [selectionListNum]: newValue,
      };
    });
  };

  const storesList = ["Walmart", "Target", "Safeway", "Whole Foods"];

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {storesList.map((item, index) => {
          return (
            <div key={index}>
              <StyledListItem
                button
                selected={currentSelection}
                onClick={() => handleClick(item)}
                active={item === currentSelection ? true : false}
              >
                <StyledListItemText disableTypography={true} primary={item} />
              </StyledListItem>
              {index < storesList.length - 1 ? <Divider /> : null}
            </div>
          );
        })}
      </List>
    </div>
  );
};

export default SelectionList;
