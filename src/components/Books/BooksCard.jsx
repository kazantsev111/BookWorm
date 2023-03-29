import React from 'react';
import OneBook from './OneBook';

export default function BooksCaed({ books }) {
  return (
    <div className="container">
      <div className="list-group">
        {books.map((books) => (
          <OneBook books={book} key={book.id} />
        ))}
      </div>
    </div>
  );
}
