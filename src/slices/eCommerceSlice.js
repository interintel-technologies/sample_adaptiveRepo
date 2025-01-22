
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
    wishlist: [],
    isCartLoading: false,
    isWishlistLoading: false
};

const eCommerceSlice = createSlice({
    name: "eCommerce",
    initialState,
    reducers: {
        setCart: (state, action) => {
            console.log("action.payload ",action);
            
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

export const eCommerceStore = configureStore({
    reducer: {
        ecCommerce: eCommerceSlice.reducer
    },
});

export const { setCart, setWishlist, setIsCartLoading, setIsWishlistLoading } = eCommerceSlice.actions;
