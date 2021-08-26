import React from "react";

import { ItemsContainerGrid, NoDataContainer } from "./items-container.styles";

import ItemContainer from "../item-container/item-container.component";

const ItemsContainer = ({ data }) => {
  if (data && data.length > 0) {
    return (
      <ItemsContainerGrid>
        {data.map(({ price, imgURL, title }, index) => (
          <ItemContainer
            image={imgURL}
            title={title}
            price={price}
            key={index}
          />
        ))}
      </ItemsContainerGrid>
    );
  } else {
    return (
      <NoDataContainer>No data was found, please try again.</NoDataContainer>
    );
  }
};

export default ItemsContainer;
