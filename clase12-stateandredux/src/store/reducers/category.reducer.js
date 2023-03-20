import { categories } from "../../data/categories";

const initialState = {
    categories: categories,
    selectedCategory: null,
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SELECT_CATEGORY":
            return {
                ...state,
                selectedCategory: action.payload,
            };
        default:
            return state;
    }
}

export default categoryReducer;

