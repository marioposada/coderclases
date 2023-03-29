import { GET_ORDERS, DELETE_ORDER } from '../actions/order.action';



const initialState = {
    list: []
}

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS:
        return {
            ...state,
            list: action.orders
        }
        case DELETE_ORDER:
            return {
                ...state,
                list: state.list.filter(order => order.id !== action.id)
            }
        default: 
            return state;
    }
}

export default ordersReducer;