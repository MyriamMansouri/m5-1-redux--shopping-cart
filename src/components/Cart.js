import React from "react";
import Button from "./Button";
import CartItem from "./CartItem";
import styled from "styled-components";

const Cart = () => {
  return (
    <Wrapper>
      <div>
        <Title>Your Cart</Title>
        <Items>0 items</Items>
        <CartItem />
      </div>

      <Total>
        Total: <Amount>$2.89</Amount>
        <BuyBtn>Purchase</BuyBtn>
      </Total>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing:border-box;
  padding: 25px;
  position: sticky;
  top: 0;
  height:100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  
`;
const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 17px 0;
`;
const Items = styled.div`
  color: rgb(204, 204, 204);
  margin: 10px 0 40px;
`;
const Total = styled.div`
  float: bottom;
  font-size: 1.5rem;
`;
const Amount = styled.span`
  font-weight: bold;
`;
const BuyBtn = styled(Button)`
  width: 140px;
  display: inline-block;
`;
export default Cart;
