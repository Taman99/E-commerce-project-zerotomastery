import React from 'react';
import { connect } from 'react-redux';
import { addItem, clearItemFromCart, removeItem } from '../../Redux/Cart/Cart.actions';
import './CheckoutItem.styles.scss';

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
    const { imageUrl, name, quantity, price } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            
            <div className='quantity'>
                <span className='l-p-20 pointer' onClick={()=> removeItem(cartItem)}>&#10094;</span>
                <span className='quantity-value' >{quantity}</span>
                <span className='pointer' onClick={()=> addItem(cartItem)}>&#10095;</span>
            </div>

            <span className='price'>${price * quantity}</span>

            <div className='remove-button' onClick={() => clearItemFromCart(cartItem)}>&#10008;</div>

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    addItem : item => dispatch(addItem(item)),
    removeItem : item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);