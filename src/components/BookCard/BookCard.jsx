const BookCard = ({ book }) => {
    return (
        <li className='bookCard'>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
        </li>
    );
}

export default BookCard;