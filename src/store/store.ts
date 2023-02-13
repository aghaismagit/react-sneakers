import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { sneakersAPI } from './product/sneakersAPI'
import { cartReducer } from './product/CartSlice'

const rootReducer = combineReducers({
  cartReducer,
  [sneakersAPI.reducerPath]: sneakersAPI.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sneakersAPI.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
