import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0,
        purchasable: false
    }
    updatePurchaseState(ingredient) {
        const sum = Object.keys(ingredient).map(
            (igKey) => {
                return ingredient[igKey];
            }
        ).reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({ purchasable: sum });
    }
    ingredientHandler = (type, nagative) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = nagative ? oldCount - 1 : oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updateCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = nagative ? oldPrice - priceAddition : oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
        this.updatePurchaseState(updateIngredients);
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal />
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientHandler={this.ingredientHandler}
                    disabled={disabledInfo}
                    totalPrice={this.state.totalPrice}
                    purchasable={this.state.purchasable}></BuildControls>
            </Aux>
        );
    }
}
export default BurgerBuilder;