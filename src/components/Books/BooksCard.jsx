import React from 'react';
import OneBook from './OneBook';

export default function BooksCard({ books, user }) {
  return (
    <div className="container">

      <div className="row">

        {books?.map((book) => (
          <div className="col-4" key={book.id}>
            
              <OneBook book={book} user={user} />
            
          </div>
        ))}
      </div>
    </div>
  );
}
