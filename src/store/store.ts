import { configureStore } from "@reduxjs/toolkit";
import { navSlice } from "./slices/nav-slice.ts";
import { languageSlice } from "./slices/language-slice.ts";

export const store = configureStore({
    reducer: {
        nav: navSlice.reducer,
        language: languageSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;