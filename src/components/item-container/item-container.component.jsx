import React from "react";


import {
  Container,
  ImageContainer,
  ProductTitle,
  ProductPrice,
} from "./item-container.styles";



const ItemContainer = ({ image, title, price }) => {
  return (
    <Container>
      <ImageContainer src={image} />
      <ProductTitle>{title}</ProductTitle>
      <ProductPrice>${price}</ProductPrice>
    </Container>
  );
};

export default ItemContainer;
