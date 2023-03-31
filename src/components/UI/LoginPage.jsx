import axios from 'axios';
import React, { useState } from 'react';

export default function LoginPage() {
  const [errorState, setErrorState] = useState(null);

  const [inputGroup, setInputGroup] = useState({
    email: '',
    password: '',
  });
  const changeHandler = (event) => setInputGroup((prev) => ({ ...prev, [event.target.name]: event.target.value }));

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', inputGroup);
      if (response.status === 200) {
        window.location = '/';
        return;
      }
      // setErrorState(response.data);
    } catch (error) {
      setErrorState(error.response.data);
      console.log(error);
    }
  };
  return (
    <form onSubmit={submitHandler} className="col-lg-6 mt-5 col-md-8 mx-auto rounded border border-body bg-body p-2 text-dark bg-opacity-75">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Почта
          <input
            value={inputGroup.email}
            onChange={changeHandler}
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
        <label htmlFor="exampleInputPassword1" className="form-label">
          Пароль
          <input
            value={inputGroup.password}
            onChange={changeHandler}
            name="password"
            type="password"
            className={inputGroup.password.length <= 3 ? 'form-control is-invalid' : 'form-control'}
            id="exampleInputPassword1"
          />
          <div id="validationServer03Feedback" className="invalid-feedback">
            Слишком короткий пароль
          </div>
        </label>
      </div>

      <button type="submit" className="btn btn-primary">
        Войти
      </button>
      {errorState && <div style={{ color: 'red' }}>{errorState.message}</div>}
    </form>
  );
}
