import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    loginUser : (state, action) => {
      console.log('stateUser', state.user)
      state.user = action.payload;
    },

    logoutUser : (state) => {
      state.user = null;
    }
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
