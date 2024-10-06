import { useBookDispatch, useBookSelector } from "../store/BookStore";
import emptyImage from '../assets/empty-image.svg';
import { deselectBook } from "../slices/bookSlice";

export default function BookFull() {
    const dispatch = useBookDispatch();
    const {selectedBook: book} = useBookSelector((state) => state.book);

    if (!('volumeInfo' in book)) return;
    
    const {
        volumeInfo: {
            title,
            imageLinks = {thumbnail: emptyImage},
            publishedDate,
            categories = [],
            authors,
            description,
            pageCount,
            averageRating
        }
    } = book;

    return (
        <div className="details">
            <>
                <header>
                    <button className="btn-back" onClick={() => dispatch(deselectBook())}>&larr;</button>
                    <img src={imageLinks.thumbnail} alt={`Poster of ${title} movie`}/>
                    <div className="details-overview">
                        <h2>{title}</h2>
                        <p>Published: {publishedDate}</p>
                        <p>Pages: {pageCount}</p>
                        <p>{categories.join(', ')}</p>
                        <p><span>⭐️</span>
                            {averageRating} Average rating
                        </p>
                    </div>
                </header>

                <section>
                    <p><em>{description}</em></p>
                    <p>Written by {authors.join(', ')}</p>
                </section>
            </>
        </div>
    )
}