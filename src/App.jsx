

import './App.css'
import { Provider } from 'react-redux';
import store from './store';
import BookForm from './components/bookForm';
import BookList from './components/bookList';
import { useState } from 'react';



function App() {
  const [currentBook, setCurrentBook] = useState(null);

  return (
    <>
    <Provider store={store}>
      <div className="app">
        <h1 className='text-center'>MY BOOKS</h1>
        <div className="container">
        <div className="row">
          <div className="col-md-6">
          <BookForm currentBook={currentBook} setCurrentBook={setCurrentBook} />
          </div>
          <div className="col-md-6 listbook element">
            <BookList setCurrentBook={setCurrentBook} />  
          </div>
        </div>
        </div>
      </div>
    </Provider>
    </>
  )
}

export default App
