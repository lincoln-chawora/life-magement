import React from "react"
import BookTeaser from "./BookTeaser"
import { useSelector } from "react-redux";
import { BookState } from "../store/BookStore";

const BooksList: React.FC = () => {
  const {searchResults: books} = useSelector((store: BookState) => store.book);
  
  return (
    <ul className="list list-books">
      {books.map((book) => (
        <BookTeaser key={book.id} book={book} />
      ))}
    </ul>
  )
};

export default BooksList;
