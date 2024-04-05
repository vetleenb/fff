import React from 'react';

const BookCard = ({ books }) => {
  return (
    <div className="books">
      <h2>{books.title}</h2>
      <p>Forfatter: {books.author_name ? books.author_name.join(', ') : 'Ian Fleming'}</p>
      <p>År: {books.first_publish_year}</p>
  {books.cover_i && <img src={`https://covers.openlibrary.org/b/id/${books.cover_i}-L.jpg`} alt="Book Cover" />}
    </div>
  );
};
export default BookCard;












