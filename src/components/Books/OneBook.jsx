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
    <div className="card mt-4" style={{ width: '18rem' }}>
      <div className="card-body">
        <a href={`http://localhost:3000/${book.id}`}>
          <img width="255" src={book.img} alt="" />
          <h5 className="card-title mt-3">{book.title}</h5>
          <p className="card-text mt-3">Автор: {book.autorbook}</p>
          <p className="card-tex mt-3">{book.body}</p>
          {/* <button onClick={} type="button">Добавить коментарий</button> */}
        </a>
      </div>
      <div>
        {url.pathname === '/likebooks' ? (
          <button onClick={deletHeandler} type="button" className="w-20 mb-3 btn btn-lg btn-outline-dark ">Удалить из избранного</button>
        ) : (<button onClick={likeHeandler} type="button" className="w-20 mb-3 btn btn-lg btn-outline-dark ">Добавить в избранное</button>)}
      </div>
    </div>
  );
}
