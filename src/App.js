
import './App.css';
import React, { useState, useEffect } from 'react';
import MySearchBar from './components/MySearchBar';
import MySearchResults from './components/MySearchResults';
import BookCard from './components/BookCard';

const App = () => {
  const [books, setBooks] = useState([]);
  const [mysearchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const responder = await fetch('https://openlibrary.org/subjects/james_bond.json?published_in=20XX');
        const info = await responder.json();
        setBooks(info.works);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleSearch = async (searchTerm) => {
    try {
      const responder = await fetch(`https://openlibrary.org/search.json?q=${searchTerm}`);
      const info = await responder.json();
      setSearchResults(info.docs);
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
        {mysearchResults.length > 0 ? (
          <MySearchResults results={mysearchResults} />
        ) : (
          <div className="book-list">
            {books.map((book, index) => (
              <BookCard key={index} book={book} />
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


   
