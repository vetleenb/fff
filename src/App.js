
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import MovieCard from './components/MovieCard';

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

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


    const handleSearch = async (searchTerm) => {
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${searchTerm}`);
      setSearchResults(response.data.docs);
    } catch (error) {
      console.error('Error searching books:', error);
    }
  };


 return (
    <div className="App">
      <header>
        <h1>James Bond Books</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      <main>
        {searchResults.length > 0 ? (
          <SearchResults results={searchResults} />
        ) : (
          <div className="book-list">
            {books.map((book, index) => (
              <MovieCard key={index} book={book} />
            ))}
          </div>
        )}
      </main>
      <footer>
        <p>&copy; 2024 James Bond Books</p>
      </footer>
    </div>
  );
};

export default App;


   
