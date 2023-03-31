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

router.get('/comments', async (req, res) => {
  res.render('Layout');
});

export default router;

// element={<BooksCard books={books} />}
