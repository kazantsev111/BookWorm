import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';

const authRouter = express.Router();

authRouter.post('/signup', async (req, res) => {
  const {
    name, email, phone, password,
  } = req.body;

  const hashpass = await bcrypt.hash(password, 10);

  const [foundUser, created] = await User.findOrCreate({
    where: { email },
    defaults: {
      name,
      phone,
      hashpass,
    },
  });

  if (!created) return res.status(401).json({ message: 'Email is in use' });

  req.session.user = foundUser;

  return res.sendStatus(200);
});

authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const foundUser = await User.findOne({ where: { email } });

  if (!foundUser) return res.status(401).json({ message: 'No such email' });

  if (await bcrypt.compare(password, foundUser.hashpass)) {
    req.session.user = foundUser;
    return res.sendStatus(200);
  }

  return res.status(401).json({ message: 'Wrong password' });
});

authRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('students_sid');
  res.sendStatus(200);
});

export default authRouter;
