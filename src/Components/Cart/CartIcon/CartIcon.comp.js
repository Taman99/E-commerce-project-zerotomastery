import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as ShoppingIcon } from '../../../Assets/shopping-bag.svg';
import {toggleCartHidden} from '../../../Redux/Cart/Cart.actions';
import { selectCartItemsCount } from '../../../Redux/Cart/Cart.selector';
import './CartIcon.styles.scss';


const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className='cart-icon' onClick={ toggleCartHidden }>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    itemCount : selectCartItemsCount
})

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);