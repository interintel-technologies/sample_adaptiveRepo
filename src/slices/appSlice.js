
import { createSlice, configureStore } from '@reduxjs/toolkit';


const initialState = {
    payload: {},
    pageGroup: 0,
    page: 0,
    view: "",
    offline: true,
    // snackbarOpened: false,
    // snackbarMessage: '',
    // snackbarTitle: 'Info',
    // snackbarContext: SNACKBAR_CONTEXT_INFO,
    template: {
        interface: {
          pageGroups: [],
        },
        // other properties
      },
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
        setTemplate: (state, action) => {
            state.template = action.payload;
          },
    }
});

const ecommenrceSlice = createSlice({
    name: "ecommerce",
    initialState:{cart: [],
        wishlist: [],
        isCartLoading: false,
        isWishlistLoading: false},
        reducers: {
            setCart: (state, action) => {
                
                state.cart = action.payload;
            },
            setWishlist: (state, action) => {
                state.wishlist = action.payload;
            },
            setIsCartLoading: (state, action) => {
                state.isCartLoading = action.payload;
            },
            setIsWishlistLoading: (state, action) => {
                state.isWishlistLoading = action.payload;
            }
        }
});

export const appStore = configureStore({
    reducer: {
        app: appSlice.reducer,
        ecommerce:ecommenrceSlice.reducer

    },
});

export const { setPayload,setTemplate , setOffline, setPageGroup, setPage, setView } = appSlice.actions;
