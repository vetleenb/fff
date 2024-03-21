import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '.components/searchbar';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://openlibrary.org/subjects/james_bond.json?published_in=20XX');
        setBooks(response.data.works);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="App">
      <h1>James Bond Books</h1>
      <div className="book-list">
        {books.map((book, index) => (
          <div key={index} className="book">
            <h2>{book.title}</h2>
            <p>Author: {book.authors}</p>
            <p>Year: {book.first_publish_year}</p>
            {/* Add more book details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
