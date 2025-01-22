import { createSlice, configureStore } from '@reduxjs/toolkit';
import formReducer from './src/slices/formSlice';
import ecommerceReducer from './src/slices/eCommerceSlice'

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


const initialState = {
    payload: {},
    pageGroup: 4,
    page: 0,
    view: "",
    offline: true,
    // Uncomment these lines if you want to use snackbar functionality
    // snackbarOpened: false,
    // snackbarMessage: '',
    // snackbarTitle: 'Info',
    // snackbarContext: SNACKBAR_CONTEXT_INFO,
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setPayload: (state, action) => {
            state.payload = action.payload;
        },
        setPageGroup: (state, action) => {
            state.pageGroup = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setView: (state, action) => {
            state.view = action.payload;
        },
        setOffline: (state, action) => {
            state.offline = action.payload;
        },
    }
});

// The formSlice is typically defined in a separate file, imported as formReducer. 
// Here is a brief example of what the formSlice might look like.
const formSlice = createSlice({
    name: "form",
    initialState: {
        formData: {},
    },
    reducers: {
        setFormData: (state, action) => {
            state.formData = action.payload;
        },
        resetFormData: (state) => {
            state.formData = {gateway_host:baseUrl(),user_agent:navigator.userAgent};
        },
    }
});

export const appStore = configureStore({
    reducer: {
        app: appSlice.reducer,
        ecommerce:ecommerceReducer
    },
});

export const { setPayload, setPageGroup, setPage, setView, setOffline } = appSlice.actions;
export const { setFormData, resetFormData } = formSlice.actions;  // Example form actions
