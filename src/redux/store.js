import { 
  configureStore, 
  combineReducers 
} from "@reduxjs/toolkit";
import {
  CategoriesReducer as categories,
  ProvidersReducer as providers
} from './reducers/index'

const rootReducer = combineReducers({
  categories,
  providers
})

const store = configureStore({reducer: rootReducer})

export default store