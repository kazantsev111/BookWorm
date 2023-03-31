import React, { useState } from 'react';
import OneBook from './OneBook';

export default function likeBooks({ books, user }) {
  const [likebooks, setLikebooks] = useState(books || []);
  return (
    <div className="row">

      {likebooks?.map((book) => (
        <div className="col-4" key={book.id}>
          <OneBook book={book} setLikebooks={setLikebooks} user={user} />
        </div>
      ))}
    </div>
  );
}
