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

    <form onSubmit={booksHeandler}>

      <div className="mb-10">
        <label htmlFor="exampleInputEmail1" className="form-label">

          Ссылка на обложку
          <input
            name="img"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </label>
      </div>

      <div className="mb-10">
        <label htmlFor="exampleInputEmail1" className="form-label">

          Автор книги
          <input
            name="autorbook"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </label>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Название книги
          <input
            name="title"
            type="title"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </label>
      </div>

      <div className="input-group input-group-lg">
        <span className="input-group-text" id="inputGroup-sizing-lg">Описание</span>
        <input name="body" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
      </div>

      <button type="submit" className="btn btn-primary">
        Опубликовать
      </button>
    </form>
  );
}
