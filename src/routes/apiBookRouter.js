import express from 'express';

const router = express.Router();

router.post('/:id', (req, res) => {
  res.render('Layout');
});

export default router;
