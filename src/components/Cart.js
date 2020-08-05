import React, { useEffect } from "react";
import Button from "./Button";
import CartItem from "./CartItem";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers";

const Cart = () => {
  const [total, setTotal] = React.useState(0);
  const storeItems = useSelector(getStoreItemArray);
  useEffect(() => {
    if (storeItems.length> 0) {
      setTotal(
        storeItems.map((item) => item.price).reduce((val, acc) => val + acc)
      );
    }
  }, [storeItems]);
  return (
    <Wrapper>
      <div>
        <Title>Your Cart</Title>
        <Items>{storeItems.length} items</Items>
        {storeItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <Total>
        Total: <Amount>${total}</Amount>
        <BuyBtn>Purchase</BuyBtn>
      </Total>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 25px;
  position: sticky;
  top: 0;
  min-height: 100vh;
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
  margin-top: 10px;
`;
const Amount = styled.span`
  font-weight: bold;
`;
const BuyBtn = styled(Button)`
  width: 140px;
  display: inline-block;
`;
export default Cart;
