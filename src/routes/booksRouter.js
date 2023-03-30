import express from 'express';
import { Book } from '../../db/models';

const router = express.Router();

router.post('/add', async (req, res) => {
  const {
    img, autorbook, title, body,
  } = req.body;
  const books = await Book.create({
    img, autorbook, title, body,
  });
  res.sendStatus(200);
});

export default router;
