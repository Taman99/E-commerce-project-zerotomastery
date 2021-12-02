import React from 'react'
import { connect } from 'react-redux';
import { addItem } from '../../../Redux/Cart/Cart.actions';
import CustomButton from '../../SignInUpComponents/CustomButton/CustomButton.component';
import './CollectionItem.styles.scss'

const CollectionItem = ( item ) => {
    const { addItem, name, imageUrl, price } = item;
    return (
        <div className='collection-item'>
            <div className='image' style={{
                backgroundImage: `url(${imageUrl})`
            }}>
                <div className='collection-footer'>
                    <span className='name'>{name}</span>
                    <span className='price'>{price}</span>
                </div>               
            </div>
            <CustomButton inverted onClick={ ()=> addItem(item)} >Add to Cart</CustomButton>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    addItem : (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps) (CollectionItem);
