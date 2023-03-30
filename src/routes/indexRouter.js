import express from 'express';
import { Book } from '../../db/models';
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
export default router;

// element={<BooksCard books={books} />}
