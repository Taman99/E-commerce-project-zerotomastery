import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem.comp';
import StripeButton from '../../Components/StripeButton/StripeButton.comp';
import { selectCartItems, selectTotalPrice } from '../../Redux/Cart/Cart.selector';
import './CheckoutPage.styles.scss';

const CheckoutPage = ({cartItems, totalPrice }) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header=block'>
                    <span>Product</span>                      
                </div>
                <div className='header=block'>
                    <span>Description</span>                      
                </div>
                <div className='header=block'>
                    <span>Quantity</span>                      
                </div>
                <div className='header=block'>
                    <span>Price</span>                      
                </div>
                <div className='header=block'>
                    <span>Remove</span>                      
                </div>
            </div> 
            {
                cartItems.map( item => (
                    <CheckoutItem key={item.id} cartItem={item} />
                ))
            }
            <div className='total'>
                Total : ${totalPrice}
            </div>
            <div className='test-warning'>
                *Use provided dummy card details for payments*<br>
                </br>
                4242 4242 4242 4242 Exp: 01/23 CVV: 123
            </div>
            <StripeButton price={totalPrice} />          
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    totalPrice : selectTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage);