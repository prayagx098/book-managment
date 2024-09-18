import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, editBook } from '../actions/bookActions';

const BookForm = ({ currentBook, setCurrentBook }) => {
  const [title, setTitle] = useState(currentBook ? currentBook.title : '');
  const [author, setAuthor] = useState(currentBook ? currentBook.author : '');
  const [thumbnail, setThumb] = useState(currentBook ? currentBook.thumbnail : '');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: currentBook ? currentBook.id : Date.now(),
      title,
      author,
      thumbnail,
    };
    if (currentBook) {
      dispatch(editBook(book));
    } else {
      dispatch(addBook(book));
    }
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setAuthor('');
    setThumb('');
    setCurrentBook(null);
  };

  return (
    <form className='form-control' onSubmit={handleSubmit}>
        <h1 className='text-center'>Add your Book</h1>
      <input
        type="text"
        className='form-control'
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      /> <br />
      <input
        type="text"
        className='form-control'
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      /> <br />
            <input
        type="text"
        className='form-control'
        placeholder="Photo Url"
        value={thumbnail}
        onChange={(e) => setThumb(e.target.value)}
        required
      /> <br />
      <button className='btn btn-outline-success' type="submit">{currentBook ? 'Edit' : 'Add'} Book</button>
    </form>
  );
};

export default BookForm;
