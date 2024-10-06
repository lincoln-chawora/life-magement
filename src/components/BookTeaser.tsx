import React from "react";
import { Volume } from "../modals/book.modal";
import { useBookDispatch } from "../store/BookStore";
import { selectBook } from "../slices/bookSlice";
import emptyImage from '../assets/empty-image.svg';

interface BookTeaserProps {
    book: Volume
}
const BookTeaser: React.FC<BookTeaserProps> = ({book}) => {
    const dispatch = useBookDispatch();

    const {
        title,
        imageLinks = {thumbnail: emptyImage},
    } = book.volumeInfo;

    function handleClick() {
        dispatch(selectBook(book));
    }

    return (
        <li onClick={() => handleClick()}>
            <img src={imageLinks.thumbnail} alt={`${title} cover`} />
            <h3>{title}</h3>
        </li>
    )
}

export default BookTeaser;