import { useState } from 'react';
import Input from '../Input/Input';
import BookCard from '../BookCard/BookCard';
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
                <form onSubmit={handleSubmit}>
                    <Input {...newBook} dataType="title" onChangeFunc={handleInputChange} />
                    <Input {...newBook} dataType="author" onChangeFunc={handleInputChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                <ul>
                    {
                        books.map((book, index) => (
                            <BookCard key={index} book={book} />
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Bookshelf;