
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    mode: "light",
    colors: {
        primary: "#1f438b",
        link: "#1f438b",
        info: "#1f438b"
    },
    font: "Inter"
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state = action.payload;
        }
    }
});

export const themeStore = configureStore({
    reducer: {
        theme: themeSlice.reducer
    },
});

export const { setTheme } = themeSlice.actions;
