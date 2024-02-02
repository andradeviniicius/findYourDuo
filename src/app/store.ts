import { configureStore } from '@reduxjs/toolkit'
import createAdModalSlice from '../features/modal/createAdModalSlice'
// ...

export const store = configureStore({
  reducer: {
    modal: createAdModalSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch