import { REMOVE_ITEM, ADD_ITEM, CONFIRM_CART } from "../actions/cart.actions";

const initialState = {
  items: [],
  total: 0,
};

const sumTotal = (list) =>
  list.map((item) => item.price * item.quantity).reduce((a, b) => a + b, 0);

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
        let updatedCart = [];
        if(state.items.find(item => item.id === action.item.id)) {
            updatedCart = state.items.map(item => {
                if(item.id === action.item.id) item.quantity += 1;
                return item;
            });
        } else {
            const item = {...action.item, quantity: 1};
            updatedCart = [...state.items, item];
        }
        return {
            ...state,
            items: updatedCart,
            total: sumTotal(updatedCart)
        }
    case REMOVE_ITEM:
        const filteredCart = state.items.filter(item => item.id !== action.itemId);
        return {
            ...state,
            items: filteredCart,
            total: sumTotal(filteredCart)
        }
    default:
        return state;
}
};

export default cartReducer;
