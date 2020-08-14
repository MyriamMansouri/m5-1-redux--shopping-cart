import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { updateItem } from "../actions";

const Quantity = ({ id, quantity }) => {
  const dispatch = useDispatch();
  const [customQuantity, setCustomQuantity] = React.useState(quantity);

  React.useEffect(() => {
    setCustomQuantity(quantity);
  }, [quantity]);

  return (
    <Wrapper>
      Quantity:
      <Input>
        <input
          value={customQuantity}
          onChange={(e) => setCustomQuantity(Number(e.target.value))}
          onBlur={() => dispatch(updateItem(id, customQuantity))}
        />
      </Input>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px 17px;
  box-sizing: border-box;
  background-color: hsl(295, 36.7%, 15%);
  color: rgb(204, 204, 204);
  font-size: 1.2rem;
`;
const Input = styled.div`
  display: inline-block;
  margin-left: 10px;
  color: white;
  padding: 3px 8px;
  border-bottom: solid 3px white;
  input {
    text-align: center;
    background-color: inherit;
    color: inherit;
    width: 25px;
  }
`;

export default Quantity;
