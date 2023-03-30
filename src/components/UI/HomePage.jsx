import React from 'react';
import BooksCard from '../Books/BooksCard';

export default function HomePage({ books }) {
  console.log("+++++++>>>>>>>>>>>", books);

  return (
    <div>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Каталог</h1>
            <p className="lead text-muted">Добро пожаловать на наш сайт, посвященный миру книг! Здесь вы найдете самые свежие и интересные рецензии на различные произведения литературы, а также сможете поделиться своим мнением о прочитанных книгах. Мы стремимся создать уютное и дружелюбное сообщество книголюбов, где каждый найдет для себя что-то новое и увлекательное. Присоединяйтесь к нам и давайте вместе откроем для себя мир литературы!</p>
            <p>
              <a href="/addbook" className="btn btn-primary my-2">Добавить рецензию </a>
            </p>
          </div>
        </div>
      </section>
      {/* карточки добавленных книг */}
      <div>
        <BooksCard books={books} />
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
