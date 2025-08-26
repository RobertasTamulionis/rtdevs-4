import { createSlice } from "@reduxjs/toolkit";

type NavState = {
    active: boolean;
};

const initialState: NavState = {
    active: false
}

export const navSlice = createSlice({
    name: 'nav',
    initialState: initialState,
    reducers: {
        toggleNav(state){
            state.active = !state.active;
        }
    }
});

export const { toggleNav } = navSlice.actions;