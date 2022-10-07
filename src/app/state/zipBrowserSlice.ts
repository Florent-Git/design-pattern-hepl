import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ZipEntry } from "../model/Composite";

export interface ZipBrowserState {
    history: ZipEntry[],
    root: ZipEntry | undefined,
    selected: ZipEntry | undefined
}

const initialState: ZipBrowserState = {
    history: [],
    root: undefined,
    selected: undefined
}

export const zipBrowserSlice = createSlice({
    name: 'zipBrowser',
    initialState,
    reducers: {
        loadRoot: (state, action: PayloadAction<ZipEntry>) => {
            state.root = action.payload;
            state.history.push(action.payload);
        },
        selectEntry: (state, action: PayloadAction<ZipEntry>) => {
            state.selected = action.payload;
        },
        back: (state) => {
            state.history.pop();
        },
        navigateTo: (state, action: PayloadAction<string>) => {
            state.history.push(state.history.find(el => el.getName() === action.payload)!!)
        },
        navigateBackTo: (state, action: PayloadAction<string>) => {
            while (action.payload !== state.history[state.history.length - 1].getName()) {
                state.history.pop();
            }
        }
    }
});

export const { back, navigateTo, navigateBackTo, loadRoot, selectEntry } = zipBrowserSlice.actions;

export default zipBrowserSlice.reducer;