import { configureStore } from '@reduxjs/toolkit'

import walletReducer from './walletSlice'

export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    wallet: walletReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
