import { createSlice } from '@reduxjs/toolkit';


const protocol = window.location.protocol;
const hostname = window.location.hostname;
const port = window.location.port;

const baseUrl = () => {
    let fullHost = `${protocol}//${hostname}:${port}`;
    if (window.process?.env?.NODE_ENV === 'development') {
      fullHost = fullHost.substr(0, fullHost.length - 1);
    }
    return fullHost;
  };
  
const formSlice = createSlice({
  name: 'form',
  initialState: {
    data: {gateway_host:baseUrl(),user_agent:navigator.userAgent},
  },
  reducers: {
    updateFormData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    clearFormData: (state) => {
      state.data = {};
    },
  },
});

export const { updateFormData, clearFormData } = formSlice.actions;

export default formSlice.reducer;
