import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {type LanguageKey } from "../../assets/helpers/types";
import { getDefaultLanguage } from "../../assets/helpers/languageHelpers";

type LanguageState = {
    currentLanguage: LanguageKey;
};

const initialState: LanguageState = {
    currentLanguage: getDefaultLanguage()
}

export const languageSlice = createSlice({
    name: 'language',
    initialState: initialState,
    reducers: {
        setLanguage(state, action: PayloadAction<LanguageKey>){
            state.currentLanguage = action.payload;
            localStorage.setItem("lang", action.payload);
        }
    }
});

export const { setLanguage } = languageSlice.actions;