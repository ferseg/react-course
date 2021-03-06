import React, { Component } from 'react';
import styles from './BurgerIngredient.css';
import PropTypes from 'prop-types';

export const IngredientTypes = Object.freeze({
  BREAD_BOTTOM: 'bread-bottom',
  BREAD_TOP: 'bread-top',
  MEAT: 'meat',
  CHEESE: 'cheese',
  BACON: 'bacon',
  SALAD: 'salad'
});

class BurgerIngredient extends Component {
  render() {

    let ingredient = null;

    switch (this.props.type) {
      case (IngredientTypes.BREAD_BOTTOM):
        ingredient = <div className={styles.BreadBottom}></div>;
        break;
      case (IngredientTypes.BREAD_TOP):
        ingredient = (
          <div className={styles.BreadTop}>
            <div className={styles.Seeds1}></div>
            <div className={styles.Seeds2}></div>
          </div>
        )
        break;
      case (IngredientTypes.MEAT):
        ingredient = <div className={styles.Meat}></div>
        break;
      case (IngredientTypes.CHEESE):
        ingredient = <div className={styles.Cheese}></div>
        break;
      case (IngredientTypes.BACON):
        ingredient = <div className={styles.Bacon}></div>
        break;
      case (IngredientTypes.SALAD):
        ingredient = <div className={styles.Salad}></div>
        break;
      default:
        ingredient = null;
        break;
    }
    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.oneOf(Object.values(IngredientTypes))
}

export default BurgerIngredient;

