export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);

    // if(existingCartItem){
    //     existingCartItem.quantity = existingCartItem.quantity + 1;
    //     return [...cartItems];
    // }

    if(existingCartItem){
            return cartItems.map( item => item.id === cartItemToAdd.id ? {...item, quantity : item.quantity + 1 } : item );
        }       //This works because it returns new array which renders the component when array is modified. Whereas above logic makes changes in current arry and hence does renders the component when array modified

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}

export const removeItemToCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToRemove.id);

    if(existingCartItem.quantity !== 1 ){
        return cartItems.map( item => item.id === cartItemToRemove.id ? {...item, quantity : item.quantity - 1 } : item );
    } 
    return cartItems.filter(item => item.id !== cartItemToRemove.id);
}