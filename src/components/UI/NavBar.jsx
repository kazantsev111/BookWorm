import React from 'react';
import axios from 'axios';

export default function NavBar({ user }) {
  const logoutHandler = async () => {
    const response = await axios.get('/api/auth/logout');
    if (response.status === 200) {
      window.location = '/';
    }
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-around bg-white">
        <a className="" href="/">
          <img src="../../logoza.ru.png" alt="Лого" height="50px" />
        </a>
        <div className="nav-item mt-0.5">
          <div className="navbar-nav">
            <p className="nav-link active" aria-current="page">
              {user?.id ? `Привет, ${user.name}` : 'Привет, гость!'}
            </p>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg p-1">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">📚Главная</a>
              </li>
              {!user?.id && (
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  🔑Войти
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/signup">Регистрация</a></li>
                  <li><a className="dropdown-item" href="/login">Авторизация</a></li>
                </ul>
              </li>
              )}
              {user?.id && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/addbook">🧩Добавить книгу</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/likebooks">🧡Избранное</a>
                </li>
                <li className="nav-item">
                  <button type="button" className="nav-link" onClick={logoutHandler}>
                    🚪Выход
                  </button>
                </li>
              </>
              )}
            </ul>
            <div />
          </div>

        </nav>
      </div>
    </div>
  );
}
