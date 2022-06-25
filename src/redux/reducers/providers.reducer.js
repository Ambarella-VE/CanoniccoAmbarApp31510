import { providersTypes } from '../types/index';
import {
  providers
} from '../../utils/index'

const { SELECT_PROVIDER, FILTERED_PROVIDERS } = providersTypes;

const initialState = {
  providers,
  filteredProviders: [],
  selectedProvider: null,
}

const ProvidersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PROVIDER:
      return {
        ...state,
        selectedProvider: state.providers.find(provider => provider.id === action.providerId),
      };
    case FILTERED_PROVIDERS:
      return {
        ...state,
        filteredProviders: state.providers.filter(provider => provider.categoryId === action.categoryId),
      };
    default:
      return state;
    }
  }

  export default ProvidersReducer;
