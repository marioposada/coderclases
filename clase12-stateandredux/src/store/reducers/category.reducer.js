import { categories } from "../../data/categories";
import { SELECT_CATEGORY } from "../actions/category.action";

const initialState = {
  categories: categories,
  selectedCategory: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_CATEGORY":
      const IndexCategory = state.categories.findIndex(
        (cat) => cat.id === action.categoryId
      );
      if (IndexCategory === -1) return state;
      return {
        ...state,
        selectedCategory: {
          ...state.categories[IndexCategory],
        },
      };
    default:
      return state;
  }
};

export default categoryReducer;
