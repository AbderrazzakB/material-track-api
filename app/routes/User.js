import { Router } from 'express';
import { body, validationResult } from 'express-validator';

import User from '../models/User.js';
const router = Router();

router
  .get('/', (req, res) => {
    res.json({ message: 'Welcome in user route' });
  })
  .get('/all', async (req, res) => {
    try {
      const users = await User.find();
      res.json({ users });
    } catch (error) {}
  })
  .get('/:id', async (req, res) => {
    const id = req.params.id;

    try {
      const user = await User.findById(id);
      if (!user) {
        return res.json({ error: 'not found' });
      } else {
        res.json({ user });
      }
    } catch (error) {
      res.json({ error });
    }
  })
  .post(
    '/',
    body('email').isEmail(),
    body('fullName').isString().trim().isLength({ min: 1, max: 50 }),
    body('password').isLength({ min: 8, max: 16 }),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      try {
        const { fullName, email, password } = req.body;
        const user = await User.create({ fullName, email, password });
        res.json({ user });
      } catch (error) {
        res.json({ error });
      }
    }
  );

export default router;
