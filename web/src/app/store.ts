import { configureStore } from '@reduxjs/toolkit'
import postAdModalSlice from '../features/modal/postAdModalSlice'
// ...

export const store = configureStore({
  reducer: {
    modal: postAdModalSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch