import React from 'react';

export default function FormBook() {
  return (
    <form>

      <div className="mb-10">
        <label htmlFor="exampleInputEmail1" className="form-label">

          Автор
          <input
            name="autor"
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
      {/* {errorState && <div style={{ color: 'red' }}>{errorState.message}</div>} */}
    </form>
  );
}
