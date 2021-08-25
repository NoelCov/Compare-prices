import React from "react";

import { ItemsContainerGrid } from "./items-container.styles";

import ItemContainer from "../item-container/item-container.component";

const ItemsContainer = ({ data }) => {
  return (
    <ItemsContainerGrid>
      {data.map(({ price, imgURL, title }, index) => (
        <ItemContainer image={imgURL} title={title} price={price} key={index} />
      ))}
    </ItemsContainerGrid>
  );
};

export default ItemsContainer;
