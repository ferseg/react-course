import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import Modal from '../../components/UI/Modal/Modal';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const prices = {
  salad: 0.25,
  bacon: 0.5,
  cheese: 0.3,
  meat: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    isModalVisible: false
  }

  showModalHandler = () => {
    this.setState({ isModalVisible: true });
  }

  purchaseCancelHandler = () => {
    this.setState({ isModalVisible: false });
  }

  purchaseContinueHandler = () => {
    alert('You have continued');
  }

  updatePurchasable = (ingredients) => {
    const sum = Object.values(ingredients)
      .reduce((sum, current) => sum + current, 0);
    this.setState({ purchasable: sum > 0 });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = oldCount + 1;
    const oldPrice = this.state.totalPrice;
    const price = prices[type];
    this.setState({ ingredients: updatedIngredients, totalPrice: oldPrice + price });
    this.updatePurchasable(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount > 0) {
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type] = oldCount - 1;
      const oldPrice = this.state.totalPrice;
      const price = prices[type];
      this.setState({ ingredients: updatedIngredients, totalPrice: oldPrice - price });
      this.updatePurchasable(updatedIngredients);
    }

  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] === 0;
    }
    return (
      <Aux>
        <Modal visible={this.state.isModalVisible}>
          <OrderSummary
            onCancel={this.purchaseCancelHandler}
            onContinue={this.purchaseContinueHandler}
            ingredients={this.state.ingredients}
            totalPrice={this.state.totalPrice} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          onOrderNow={this.showModalHandler}
          totalPrice={this.state.totalPrice}
          purchasable={this.state.purchasable}
          disabledInfo={disabledInfo} />
      </Aux>
    );
  }
}

export default BurgerBuilder;