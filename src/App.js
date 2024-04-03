
import './App.css';
import React, { useState, useEffect } from 'react';

import MySearchBar from './components/MySearchBar';
import MySearchResults from './components/MySearchResults';
import MyBookCard from './components/MyBookCard';

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
        <MySearchBar onSearch={handleSearch} />
      </header>
      <main>
        {searchResults.length > 0 ? (
          <MySearchResults results={searchResults} />
        ) : (
          <div className="book-list">
            {books.map((book, index) => (
              <MyBookCard key={index} book={book} />
            ))}
          </div>
        )}
      </main>
      <footer>
        <p>&copy; 2024 Vetle Enberg Oblig_4</p>
      </footer>
    </div>
  );
};

export default App;


   
