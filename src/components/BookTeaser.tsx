export default function BookTeaser({book, children, onSelectMovie}) {
    const {
        title,
        imageLinks: {thumbnail},
    } = book;

    return (
        <li onClick={() => onSelectMovie(title)}>
            <img src={thumbnail} alt={`${title} poster`} />
            <h3>{title}</h3>
            {children}
        </li>
    )
}