import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },

];
const buildControls = (props) => (
    <div className="BuildControls">
        <p>Current price: <strong> {props.totalPrice.toFixed(2)}</strong> </p>
        {controls.map(ctrl => {
            return <BuildControl key={ctrl.label} label={ctrl.label}
                added={() => { props.ingredientHandler(ctrl.type, false) }}
                removed={() => { props.ingredientHandler(ctrl.type, true) }}
                disabled={props.disabled[ctrl.type]} />
        })}
        <button disabled={!props.purchasable} onClick={props.ordered} className="OrderButton">
            ORDER NOW
        </button>
    </div>
);

export default buildControls;