import { useState } from 'react';

const Bookshelf = () => {

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);
    const [newBook, setNewBook] = useState({
        title: '',
        author: ''
    });

    const handleInputChange = (event) => {
        setNewBook({ ...newBook, [event.target.name]: event.target.value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit test');
        setBooks([ ...books, newBook ])
        setNewBook({
            title: '',
            author: ''
        });
    };

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                {/* Form will go here */}
                <form onSubmit={handleSubmit}>
                    <input
                        id="title"
                        name="title"
                        value={newBook.title}
                        onChange={handleInputChange}
                        type="text"
                    />
                    <input
                        id="author"
                        name="author"
                        value={newBook.author}
                        onChange={handleInputChange}
                        type="text"
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {/* Book cards will display here */}
                <ul>
                    {
                        books.map((book, index) => (
                            <li key={index} className='bookCard'>
                                <p>Title: {book.title}</p>
                                <p>Author: {book.author}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Bookshelf;