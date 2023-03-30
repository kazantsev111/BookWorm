import React from 'react';
import axios from 'axios';

export default function NavBar({ user }) {
  const logoutHandler = async () => {
    const response = await axios.get('/api/auth/logout');
    if (response.status === 200) {
      window.location = '/';
    }
  }
  return (
    <div className="d-flex justify-content-between">
      <a className="navbar-brand" href="/">
        <img src="../../logoza.ru.png" alt="Лого" height="70px" />
      </a>
      <nav className="navbar navbar-expand-lg p-2">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">📚Главная</a>
            </li>
            {!user?.id && (
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                <button type="button" className="nav-link" onClick={logoutHandler}>
                  🚪Выход
                </button>
              </li>
            </>
            )}
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {user?.id ? `Hello, ${user.name}` : 'Привет, гость!'}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
