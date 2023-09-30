import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './feature/users/usersSlice'

export const store = configureStore({
  reducer: {
    users: usersSlice,
  },
})
export type RootState = ReturnType<typeof store.getState>
