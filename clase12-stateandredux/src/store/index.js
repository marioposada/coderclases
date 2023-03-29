import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import breadReducer from './reducers/breads.reducer';
import categoryReducer from './reducers/category.reducer';
import cartReducer from './reducers/cart.reducer';
import ordersReducer from './reducers/order.reducer';
import authReducer from './reducers/auth.reducer';

const rootReducer = combineReducers({
    breads: breadReducer,
    categories: categoryReducer,
    cart: cartReducer,
    orders: ordersReducer,
    auth: authReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));



    