import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '.components/searchbar';
import searchresults from '.components/searchresults';
import moviecard from '.components/moviecard';

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
      <h1>James Bond Books</h1>
      <SearchBar onSearch={handleSearch} /> {/* Legg til søkekomponenten */}
      {searchResults.length > 0 ? (
        <SearchResults results={searchResults} /> 
      {/* Bruk SearchResults hvis det er søkeresultater */}
      ) : (
        <div className="book-list">
          {books.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};


export default App;


   
