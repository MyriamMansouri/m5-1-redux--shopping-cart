import React from "react";
import styled from "styled-components";
import Quantity from './Quantity'
import { X } from "./Icons";
import { useDispatch } from "react-redux";
import { removeItem } from "../actions";

const Wrapper = styled.div`
  border: rgba(255, 255, 255, 0.1) 2px dashed;
  position: relative;
  margin-bottom: 10px;
`;
const IconBtn = styled.button`
  position: absolute;
  background-color: inherit;
  color: inherit;
  border: none;
  cursor: pointer;
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


const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <IconBtn
        onClick={() => {
          dispatch(removeItem(item));
        }}
      >
        <X />
      </IconBtn>
      
      <TitleWrapper>{item.title}</TitleWrapper>
      <Quantity id={item.id} quantity={item.quantity} />
    </Wrapper>
  );
};

export default CartItem;
