import React from "react";
import styled from "styled-components";
import { X } from "./Icons";

const Wrapper = styled.div`
  border: rgba(255, 255, 255, 0.1) 2px dashed;
  position: relative;
`;
const IconBtn = styled.button`
  position: absolute;
  background-color:inherit;
  color:inherit;
  border:none;
  cursor:pointer;
  top: 5px;
  right: 5px;
`;
const LineWrapper = styled.div`
  padding: 10px 17px;
  box-sizing: border-box;
`;
const TitleWrapper = styled(LineWrapper)`
  font-size: 1.5rem;
`;
const QuantityWrapper = styled(LineWrapper)`
  background-color: hsl(295, 36.7%, 15%);
  color: rgb(204, 204, 204);
  font-size: 1.2rem;
`;
const Quantity = styled.span`
  display: inline-block;
  margin-left: 10px;
  color: white;
  padding: 3px 8px;
  border-bottom: solid 3px white;
`;

const CartItem = ({ quantity = 1 }) => {
  return (
    <Wrapper>
      <IconBtn>
        <X />
      </IconBtn>

      <TitleWrapper>Item</TitleWrapper>
      <QuantityWrapper>
        Quantity: <Quantity>{quantity}</Quantity>
      </QuantityWrapper>
    </Wrapper>
  );
};

export default CartItem;