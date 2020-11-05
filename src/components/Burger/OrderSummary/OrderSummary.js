import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (
            <li>
                <span>{igKey} </span>: {props.ingredients[igKey]}
            </li>
        )
    });
    return (
        <Aux>
            <h3>Your orders</h3>
            <p>A delicious burger with  the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.price}</strong></p>
            <Button btnType="Danger" clicked={props.purchaseCancelHandler}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinueHandler}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary;