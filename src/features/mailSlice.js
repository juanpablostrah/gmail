import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMessageIsOpen: false,
    selectedMail: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    selectedMailAction : (state, action) => {
      state.selectedMail = action.payload
    },

    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { openSendMessage, closeSendMessage, selectedMailAction } = mailSlice.actions;

export const selectSelectedMail = (state) => state.mail.selectedMail;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
