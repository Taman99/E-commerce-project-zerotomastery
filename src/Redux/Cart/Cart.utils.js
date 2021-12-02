export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);

    if(existingCartItem){
        existingCartItem.quantity = existingCartItem.quantity + 1;
        return [...cartItems];
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}

// if(existingCartItem){
//     return cartItems.map( item => item.id === cartItemToAdd.id ? {...item, quantity : item.quantity + 1 } : item );
// }