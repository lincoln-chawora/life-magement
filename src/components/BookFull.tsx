export default function BookFull({book}) {
    const {
        title,
        imageLinks: {thumbnail},
        publishedDate,
        categories,
        authors,
        description,
        pageCount,
        averageRating
    } = book;

    return (
        <div className="details">
            <>
                <header>
                    <button className="btn-back">&larr;</button>
                    <img src={thumbnail} alt={`Poster of ${title} movie`}/>
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