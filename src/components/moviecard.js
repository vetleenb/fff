import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="book">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Year: {book.year}</p>
      {/* Add more book details as needed */}
    </div>
  );
};

export default BookCard;
