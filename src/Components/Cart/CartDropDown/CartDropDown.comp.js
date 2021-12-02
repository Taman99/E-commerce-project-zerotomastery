import React from 'react';
import CustomButton from '../../SignInUpComponents/CustomButton/CustomButton.component';
import './CartDropDown.styles.scss';


const CartDropDown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items' />
            <CustomButton>Checkout</CustomButton>
        </div>
    )
}

export default CartDropDown;
