import React from 'react';
import axios from 'axios';

export default function SignUpPage() {
  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    try {
      const response = await axios.post('/api/auth/signup', formData);
      if (response.status === 200) {
        window.location = '/';
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="col-lg-6 mt-5 col-md-8 mx-auto rounded border border-body bg-body p-2 text-dark bg-opacity-75">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Почта
            <input
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </label>

          <div id="emailHelp" className="form-text">
            Почта должна содержать @
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="nameinput" className="form-label">
            Имя
            <input name="name" type="text" className="form-control" id="nameinput" />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="phoneinput" className="form-label">
            Телефон
            <input name="phone" type="text" className="form-control" id="imginput" />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Придумайте пароль
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Зарегистрироваться
        </button>
      </div>
    </form>
  );
}
