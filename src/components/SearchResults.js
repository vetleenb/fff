import React from 'react';
import MovieCard from './MovieCard';

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      {results.map((book, index) => (
        <MovieCard key={index} book={book} />
      ))}
    </div>
  );
};

export default SearchResults;
