const BookCard = ({ book }) => {
    return (
        <li className='bookCard'>
            <p><span>Title: </span>{book.title}</p>
            <p><span>Author: </span>{book.author}</p>
        </li>
    );
}

export default BookCard;