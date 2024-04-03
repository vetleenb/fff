import React from 'react';

const BookCard = ({ book, index }) => {
  return (
    <div className="book" key={index}>
      <h2>{book.title}</h2>
      <p>Forfatter: {book.author_name ? book.author_name.join(', ') : 'Ian Fleming'}</p>
      <p>År: {book.first_publish_year}</p>
{book.cover_i && <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} alt="Book Cover" />}
    </div>
  );
};

export default BookCard;












