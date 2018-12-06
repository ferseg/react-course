import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import { IngredientTypes } from '../Ingredient/BurgerIngredient';

import styles from './BuildControls.css';

const controls = [
  { label: 'Salad', type: IngredientTypes.SALAD },
  { label: 'Bacon', type: IngredientTypes.BACON },
  { label: 'Cheese', type: IngredientTypes.CHEESE },
  { label: 'Meat', type: IngredientTypes.MEAT }
];

const buildControls = (props) => {
  return (
    <div className={styles.BuildControls}>
      {controls.map(ctrl =>
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          type={ctrl.type}
          disabled={props.disabledInfo[ctrl.type]}
          add={props.addIngredient}
          remove={props.removeIngredient} />
      )}
      <button className={styles.OrderButton}>ORDER NOW!</button>
    </div>
  )
}

export default buildControls;
