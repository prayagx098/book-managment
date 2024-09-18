import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../actions/bookActions';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const BookList = ({ setCurrentBook }) => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {books.map((book) => (
                <Card className='mt-2'  key={book.id} style={{ width: '22rem' }}>
                <Card.Img variant="top" src={book.thumbnail} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>
                   by {book.author}
                  </Card.Text>
                  <Button onClick={() => setCurrentBook(book)} variant="warning">Edit</Button>&nbsp;
                  <Button onClick={() => dispatch(deleteBook(book.id))} variant="danger">Delete</Button>
                </Card.Body>
              </Card>
        //   <li key={book.id}>
        //     <span>{book.title} by {book.author}</span>
        //     <button onClick={() => setCurrentBook(book)}>Edit</button>
        //     <button onClick={() => dispatch(deleteBook(book.id))}>Delete</button>
        //   </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
