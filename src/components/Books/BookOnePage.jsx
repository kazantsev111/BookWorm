import React from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function bookOnePage({ bookOne, setLikebooks, book, user }) {
  // const url = useLocation();

  // const likeHeandler = async () => {
  //   await axios.post('/api/books/like', { bookId: book.id, userId: user.id });
  // };
  // const deletHeandler = async () => {
  //   await axios.delete(`/api/books/like/${book.id}`);
  //   setLikebooks((prev) => prev.filter((el) => el.id !== book.id));
  // };
  return (
    <div className="mt-5 row rounded border border-body bg-body p-2 text-dark bg-opacity-75">
      <div className="card-body">
        <img width="255" src={bookOne.img} alt="" />
      </div>
      <div>
        <h5 className="card-title mt-5">{bookOne.title}</h5>
        <p className="card-textmt-5">{bookOne.autorbook}</p>
        <p className="card-text mt-5">{bookOne.body}</p>
        {/* {url.pathname === '/likebooks' ? (
          <button onClick={deletHeandler} type="button">Удалить из избранного</button>
        ) : (<button onClick={likeHeandler} type="button">Добавить в избранное</button>)} */}
      </div>
    </div>
  );
}
