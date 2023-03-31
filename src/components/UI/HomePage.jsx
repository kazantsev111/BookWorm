import React from 'react';
import BooksCard from '../Books/BooksCard';

export default function HomePage({ books, user }) {
  return (
    <div>
      <section className="py-5 mb-4 text-center container">
        <div className="">
          <div className="col-lg-6 col-md-8 mx-auto rounded border border-warning bg-warning-subtle p-2 text-dark bg-opacity-50">
            <h1 className="fw-light">Каталог</h1>
            <p className="lead ">Добро пожаловать на наш сайт, посвященный миру книг! Здесь вы найдете самые свежие и интересные рецензии на различные произведения литературы, а также сможете поделиться своим мнением о прочитанных книгах. Мы стремимся создать уютное и дружелюбное сообщество книголюбов, где каждый найдет для себя что-то новое и увлекательное. Присоединяйтесь к нам и давайте вместе откроем для себя мир литературы!</p>
            <p>
              <a href="/addbook" className="w-20 btn btn-lg btn-outline-dark ">Добавить рецензию </a>
            </p>
          </div>
        </div>
      </section>
      {/* карточки добавленных книг */}
      <div>
        <BooksCard books={books} user={user} />
      </div>
      {/* нижний колонтикул */}
      <footer className="text-muted py-5">
        <div className="container">
          <p className="mb-1">Есть замечания или предложения по работе сайта?</p>
          <p className="mb-0">
            Можешь связаться со мной:
            {' '}
            <a href="https://t.me/SvetlanaKoreysha">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1920px-Telegram_2019_Logo.svg.png"
                width="32"
                height="32"
                alt="TG"
              />
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
