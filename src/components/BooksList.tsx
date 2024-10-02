import React from "react"
import BookTeaser from "./BookTeaser"

const BooksList: React.FC = ({books}) => {
    console.log('Books', books)
  return (
    <ul className="list list-movies">
      {books.map((book) => (
        <BookTeaser key={book.id} book={book.volumeInfo} />
      ))}
    </ul>
  )
};

export default BooksList;
