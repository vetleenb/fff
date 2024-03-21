import React from 'react';
import MovieCard from './MovieCard';

//const SearchResults = ({ results }) => {
//  return (
 //   <div className="search-results">
 //     {results.map((book, index) => (
  //      <MovieCard key={index} book={book} />
  //    ))}
  //  </div>
 // );
//};

//export default SearchResults;
const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      {results.map((result, index) => (
        <div key={index} className="result">
          <h2>{result.title}</h2>
          <p>Published Year: {result.first_publish_year}</p>
          <p>Author: {result.author_name ? result.author_name.join(', ') : 'Unknown'}</p>
          <p>Average Rating: {result.average_rating || 'N/A'}</p>
          <a href={`https://www.amazon.com/s?k=${result.amazon_id}`} target="_blank" rel="noopener noreferrer">Search on Amazon</a>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
