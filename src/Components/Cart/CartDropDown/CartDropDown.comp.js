import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../../Redux/Cart/Cart.actions';
import { selectCartItems } from '../../../Redux/Cart/Cart.selector';
import CustomButton from '../../SignInUpComponents/CustomButton/CustomButton.component';
import CartItem from '../CartItem/CartItem.comp';
import './CartDropDown.styles.scss';

const CartDropDown = ({ cartItems, history, dispatch }) => {
    
    return (
        <div className='cart-dropdown'>
            <div className='cart-items' >
                {
                    cartItems[0] != null ? (
                        cartItems.map(item => {
                            return <CartItem key={item.id} item={item} />
                        })
                    ) : (
                        <span className='empty-message'>Cart is empty</span>
                    )
                }

            </div>
            {
                cartItems[0] != null ? (
                    <CustomButton onClick={() => {
                        history.push('/checkout');
                        dispatch(toggleCartHidden());
                    }}>Checkout</CustomButton>
                ) : null
            }

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown));
