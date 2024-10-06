import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Volume } from "../modals/book.modal";

interface BookState {
    searchResults: Volume[]
    selectedBook: Volume,
    status: string;
    error: string|null;
}

const initialState: BookState = {
    searchResults: [],
    selectedBook: {} as Volume,
    status: '',
    error: ''
}

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        loadResults(state: BookState, action: PayloadAction<Volume[]>) {
            state.searchResults = action.payload;
        },
        selectBook(state: BookState, action: PayloadAction<Volume>) {
            state.selectedBook = action.payload;
        },
        deselectBook(state: BookState) {
            state.selectedBook = {} as Volume;
        },
        setInfo(state: BookState, action: PayloadAction<{status: string, error: string}>) {
            state.status = action.payload.status;
            state.error = action.payload.error;
        }
    }
});

export const {loadResults, selectBook, deselectBook, setInfo} = bookSlice.actions;
export default bookSlice.reducer;