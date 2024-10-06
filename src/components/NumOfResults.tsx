import { useBookSelector } from "../store/BookStore";

export function NumOfResults() {
    const searchResults = useBookSelector((state) => state.book.searchResults);

    return (
        <p className="num-results">
            Found <strong>{searchResults.length || 0}</strong> results
        </p>
    )
}