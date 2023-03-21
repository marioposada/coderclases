import { breads } from "../../data/breads";
import { SELECT_BREAD, FILTER_BREADS } from "../actions/bread.action";

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
                selectedBread: breads.find((bread) => bread.id === action.breadId),
            };
        case "FILTER_BREADS":
            return {
                ...state,
                filteredBreads: breads.filter(bread => bread.id === action.categoryId)
            };
        default:
            return state;
    }
}

export default breadReducer;