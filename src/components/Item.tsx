import React from "react";
import { FC } from "react";
import styled from "styled-components";
import { IItems } from "../reducers/reducerInterfaces";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 90%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;

  button {
    border-radius: 0 0 20px 20px;
  }
`;

const StyledImage = styled.img`
  max-height: 250px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
`;

const StyledText = styled.div`
  padding: 1rem;
  height: 100%;
`;

const Item: FC<IItems> = ({ title, image, price, description, id }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <StyledImage src={image} alt={title} />
      <StyledText>
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>${price}</h3>
      </StyledText>
      <Button onClick={() => dispatch(addToCart(id))}>Add to cart</Button>
    </Wrapper>
  );
};

export default Item;
