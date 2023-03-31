import express from 'express';
import { Book, Favorite } from '../../db/models';
// import notAuth from '../middlewares/notAuth';

const router = express.Router();

router.get('/', async (req, res) => {
  const books = await Book.findAll();
  const initState = { books };
  res.render('Layout', initState);
});

router.get('/signup', (req, res) => {
  res.render('Layout');
});

router.get('/login', (req, res) => {
  res.render('Layout');
});

router.get('/addbook', (req, res) => {
  res.render('Layout');
});

router.get('/likebooks', async (req, res) => {
  const favorite = await Favorite.findAll({
    where: { userId: req.session.user.id },
    include: Book,
  });
  // console.log(like)
  // console.log(JSON.parse(JSON.stringify(like)));
  // console.log(JSON.parse(JSON.stringify(like.map((book) => book.Book))));
  const likeBooks = favorite.map((book) => book.Book);
  const initState = { likeBooks };
  res.render('Layout', initState);
});

router.get('/:id', async (req, res) => {
  try {
    const {
      img, autorbook, title, body,
    } = req.body;
    const bookOne = await Book.findOne({ where: { id: req.params.id } });
    res.render('Layout', { bookOne });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
export default router;

// element={<BooksCard books={books} />}
