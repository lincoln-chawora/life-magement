import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../slices/bookSlice"
import { useDispatch, useSelector, useStore } from "react-redux";

const booksStore = configureStore({
    reducer: {
        book: bookReducer
    }
});

export type BookStore = typeof booksStore;
export type BookState = ReturnType<BookStore['getState']>
export type BookDispatch = BookStore['dispatch'];

export const useBookSelector = useSelector.withTypes<BookState>();
export const useBookStore = useStore.withTypes<BookStore>();
export const useBookDispatch = useDispatch.withTypes<BookDispatch>();

export default booksStore;
