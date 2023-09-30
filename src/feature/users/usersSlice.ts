import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  isLoggedIn: false,
  currentUser: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatedPassword: '',
  },
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    logUserIn: (state) => {
      state.isLoggedIn = true
    },
    logUserOut: (state) => {
      state.isLoggedIn = false
    },
    loggedUserData: (state, { payload }) => {
      console.log(payload[0])
      state.currentUser = payload[0]
    },
  },
})

export const { logUserIn, logUserOut, loggedUserData } = usersSlice.actions
export default usersSlice.reducer
