import React from 'react';
import BookCard from './BookCard';

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      {results.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};

export default SearchResults;
