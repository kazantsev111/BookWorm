import express from 'express';
import { Book, Favorite, Comment } from '../../db/models';
import isAuth from '../middlewares/isAuth';

const router = express.Router();

router.post('/add', isAuth, async (req, res) => {
  try {
    const {
      img, autorbook, title, body,
    } = req.body;
    const books = await Book.create({
      img, autorbook, title, body,
    });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.post('/like', isAuth, async (req, res) => {
  try {
    const { userId, bookId } = req.body;
    const [favoriteBook, created] = await Favorite.findOrCreate({
      where: { bookId, userId },
    });
    if (!created) return res.status(401).json({ message: 'Уже добавлено' });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.post('/comets/:id', isAuth, async (req, res) => {
  try {
    const {} = req.params;
    const coment = await Comment.findAll({
      where: { bookId: req.params.id },
      imclude: post
    });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.delete('/like/:id', isAuth, async (req, res) => {
  try {
    const { id } = req.params;
// console.log({ bookId: Number(id), userId: req.session.user.id });
    const book = await Favorite.destroy({
      where: { bookId: id, userId: req.session.user.id },
    });
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

export default router;
