import { configureStore } from '@reduxjs/toolkit'
import { imageApi, todosApis } from './slices/apis';
import { counterSlice } from './slices/counter';
import { pokemonSlice } from './slices/pokemon/';
export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemons: pokemonSlice.reducer,

        [todosApis.reducerPath]: todosApis.reducer,
        [imageApi.reducerPath]: imageApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApis.middleware, imageApi.middleware),
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(imageApi.middleware),
})