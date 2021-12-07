import { combineReducers } from "redux";
import CartReducer from "./Cart/Cart.reducer";
import userReducer from "./User/User.reducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import directoryReducer from "./Directory/Directory.reducer";
import shopReducer from "./Shop/Shop.reducer";
import contactReducer from "./Contact/Contact.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist : ['cart','contact']
}

const rootReducer = combineReducers({
    user : userReducer,
    cart: CartReducer,
    directory: directoryReducer,
    shop: shopReducer,
    contact : contactReducer
});

export default persistReducer(persistConfig , rootReducer);