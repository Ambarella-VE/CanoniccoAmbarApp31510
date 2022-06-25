import { categoriesTypes } from '../types/index';

const { SELECT_CATEGORY } = categoriesTypes;

export const selectCategory = (id) => ({
  type: SELECT_CATEGORY,
  categoryId: id
})