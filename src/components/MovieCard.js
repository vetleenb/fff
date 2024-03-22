import React from 'react';


const MovieCard = ({ book }) => {
  return (
    <div className="book">
      <h2>{book.title}</h2>
      <p>Forfatter: {book.author_name ? book.author_name.join(', ') : 'Ian Fleming'}</p>
      <p>År: {book.first_publish_year}</p>
{book.cover_i && <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} alt="Book Cover" />}
      {/* Vis bilde hvis cover_i-feltet er tilgjengelig */}
    </div>
  );
};

export default MovieCard;


//{book.cover_i && <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} alt="Book Cover" />}









//const MovieCard = ({ book }) => {
//  return (
 //   <div className="book">
  //    <h2>{book.title}</h2>
  //    <p>Author: {book.author}</p>
   //   <p>Year: {book.year}</p>
   //   {/* Add more book details as needed */}
    //</div>
  //);
//};


