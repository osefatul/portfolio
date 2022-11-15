import { configureStore } from '@reduxjs/toolkit'

import githubReducer from "./githubSlice"

const store = configureStore({
    
    reducer: {
        repos: githubReducer
    },

    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
    serializableCheck: false,
    }),
})

export default store;