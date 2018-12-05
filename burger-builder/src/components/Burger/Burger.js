import React from 'react';
import BurgerIngredient, { IngredientTypes } from './Ingredient/BurgerIngredient';
import styles from './Burger.css';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((ingredientName) => {
      const amountOfValues = props.ingredients[ingredientName];
      return [...Array(amountOfValues)].map((_, i) =>
        <BurgerIngredient key={ingredientName + i} type={ingredientName} />
      )
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type={IngredientTypes.BREAD_TOP} />
      {transformedIngredients}
      <BurgerIngredient type={IngredientTypes.BREAD_BOTTOM} />
    </div>
  )
}

export default burger
