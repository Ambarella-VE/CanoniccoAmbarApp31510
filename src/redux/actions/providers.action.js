import { providersTypes } from '../types/index'

const { SELECT_PROVIDER, FILTERED_PROVIDERS } = providersTypes

export const selectProvider = (id) => ({
  type: SELECT_PROVIDER,
  providerId: id
})

export const filteredProviders = (id) => ({
  type: FILTERED_PROVIDERS,
  categoryId: id
})