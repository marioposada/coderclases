import { createStore, combineReducers } from 'redux';

import breadReducer from './reducers/breads.reducer';
import categoryReducer from './reducers/category.reducer';

const rootReducer = combineReducers({
    breads: breadReducer,
    categories: categoryReducer,
});

export default createStore(rootReducer);



