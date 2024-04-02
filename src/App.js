
import './App.css';
import React, { useState, useEffect } from 'react';

import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import BookCard from './components/BookCard';

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://openlibrary.org/subjects/james_bond.json?published_in=20XX');
        const data = await response.json();
        setBooks(data.works);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data.docs);
    } catch (error) {
      console.error('Error searching books:', error);
    }
  };



 return (
    <div className="App">
      <header>
        <h1>James Bond Bøker</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      <main>
        {searchResults.length > 0 ? (
          <SearchResults results={searchResults} />
        ) : (
          <div className="book-list">
            {books.map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
          </div>
        )}
      </main>
      <footer>
        <p>&copy; 2024 Vetle Enberg Oblig</p>
      </footer>
    </div>
  );
};

export default App;


   
