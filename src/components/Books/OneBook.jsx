import React from 'react';

export default function bookCard({ book }) {
  console.log("+++++++>>>>>>>>>>>", book);
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.autorbook}</p>
        <p className="card-text">{book.body}</p>
      </div>
    </div>
  );
}
