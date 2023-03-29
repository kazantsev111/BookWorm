import React from 'react';

export default function AddForm({ addBookHandler }) {
  return (
    <form onSubmit={addBookHandler}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Название книги
          <input name="title" type="text" className="form-control" id="exampleInputEmail1" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Описание книги
          <input name="body" className="form-control" type="text" id="exampleInputPassword1" />
        </label>
      </div>

      <button type="submit" className="btn btn-primary">
        Добавить
      </button>
    </form>
  );
}