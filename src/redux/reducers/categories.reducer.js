import { categoriesTypes } from '../types/index';
import {
  categories
} from '../../utils/index'

const { SELECT_CATEGORY } = categoriesTypes;

const initialState = {
  categories,
  selectedCategory: null,
}

const CategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      const indexCategory = state.categories.findIndex(category => category.id === action.categoryId);
      if (indexCategory === -1) return state
      return {
        ...state,
        selectedCategory: action.categories[indexCategory],
      };
    default:
      return state;
    }
  }

  export default CategoriesReducer;
