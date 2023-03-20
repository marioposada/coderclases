import { breads } from "../../data/breads";

const initialState = {
    breads: breads,
    selectedBread: null,
    filteredBreads: [],
};

const breadReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SELECT_BREAD":
            return {
                ...state,
                selectedBread: action.payload,
            };
        case "FILTER_BREADS":
            return {
                ...state,
                filteredBreads: action.payload,
            };
        default:
            return state;
    }
}

export default breadReducer;