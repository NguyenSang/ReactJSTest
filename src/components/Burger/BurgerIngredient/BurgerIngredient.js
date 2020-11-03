import React from 'react';
import PropTypes from 'prop-types';
import './BurgerIngredient.css';
const BurgerIngredient = (props) => {
    let ingredient = null;
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    if (props.type === 'BreadTop') {
        ingredient = (
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds1"></div>
            </div>
        )
    } else {
        ingredient = <div className={capitalize(props.type)}></div>
    }
    return ingredient;
}
BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}
export default BurgerIngredient;