import React from 'react';
import axios from 'axios';

export default function FormBook() {
  const booksHeandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    try {
      const response = await axios.post('/api/books/add', formData);
      if (response.status === 200) {
        window.location = '/';
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (

    <form onSubmit={booksHeandler} className="col-lg-6 mt-5 col-md-8 mx-auto rounded border border-body bg-body p-2 text-dark bg-opacity-75">

      <div className="mt-3 input-group input-group-lg">
        <span className="input-group-text" id="inputGroup-sizing-lg">Ссылка на обложку</span>
        <input
          name="img"
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>

      <div className="mt-3 input-group input-group-lg">
        <span className="input-group-text" id="inputGroup-sizing-lg">Автор книги</span>
        <input
          name="autorbook"
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>

      <div className="mt-3 input-group input-group-lg">
        <span className="input-group-text" id="inputGroup-sizing-lg">Название книги</span>
        <input
          name="title"
          type="title"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>

      <div className="mt-3 input-group input-group-lg">
        <span className="input-group-text" id="inputGroup-sizing-lg">Описание</span>
        <input name="body" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
      </div>

      <button type="submit" className="w-20  mt-2 btn btn-lg btn-outline-dark ">
        Опубликовать
      </button>
    </form>
  );
}
