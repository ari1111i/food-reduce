import React, { useContext } from "react";
import { styled } from "styled-components";
import { MealItemForm } from "./MealItemForm";
import { CartContext } from "../../store/cart-context";

export const MealItem = ({ title, description, price, id }) => {
  const { onAddMeal } = useContext(CartContext);
  const addMealFormHandle = (amount) => {
    onAddMeal({
      title,
      price,
      amount,
      id,
    });
  };
  return (
    <FormState>
      <Contented>
        <b>{title}</b>
        <p>{description}</p>
        <span>${price}</span>
      </Contented>
      <MealItemForm inputId={id} onAddMeal={addMealFormHandle} />
    </FormState>
  );
};

const FormState= styled("li")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  &:not(:last-of-type) {
    border-bottom: 2px solid #d6d6d6;
  }
`;

const Contented = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 4px;
  b {
    font-size: 1.125rem;
    font-weight: 600;
  }
  p {
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
  }
  span {
    font-weight: 700;
    font-size: 20px;
    color: #ad5502;
  }
`;
