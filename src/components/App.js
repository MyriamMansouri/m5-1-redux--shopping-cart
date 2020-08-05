import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import ItemGrid from "./ItemGrid";
import GlobalStyles from "./GlobalStyles";
import Cart from "./Cart";

const App = () => {
  return (
    <Wrapper>
      <Header>
        <Logo />
      </Header>
      <ItemGridWrapper>
        <ItemGrid />
      </ItemGridWrapper>
      <CartWrapper>
        <Cart />
      </CartWrapper>

      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-areas:
    "header header header sidebar"
    "main main main sidebar";
`;

const Header = styled.header`
  grid-area: header;
  padding: 32px 64px;
`;

const ItemGridWrapper = styled.main`
  grid-area: main;
  padding: 16px 64px;
`;

const CartWrapper = styled.div`
  grid-area: sidebar;
  border-left: 3px dashed #ff406e;
  background-color: hsl(295, 36.7%, 19.2%); // dark purple
  color: white;
  min-width: 300px;
`;

export default App;
