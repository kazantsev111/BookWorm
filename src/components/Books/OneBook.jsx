import React from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function bookCard({ book, user, setLikebooks }) {
  const url = useLocation();

  const likeHeandler = async () => {
    await axios.post('/api/books/like', { bookId: book.id, userId: user.id });
  };
  const deletHeandler = async () => {
    await axios.delete(`/api/books/like/${book.id}`);
    setLikebooks((prev) => prev.filter((el) => el.id !== book.id));
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <img width="255" src={book.img} alt="" />
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.autorbook}</p>
        <p className="card-text">{book.body}</p>
        {/* <button onClick={} type="button">Добавить коментарий</button> */}
        {url.pathname === '/likebooks' ? (
          <button onClick={deletHeandler} type="button">Удалить из избранного</button>
        ) : (<button onClick={likeHeandler} type="button">Добавить в избранное</button>)}
      </div>
    </div>
  );
}
