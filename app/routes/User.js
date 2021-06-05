import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import * as argon2 from 'argon2';

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
    '/sign-up',
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
        const { _id } = user;
        const token = jwt.sign(
          { fullName, email, _id },
          process.env.JWT_SECRET,
          {
            expiresIn: process.env.JWT_EXPIRES,
          }
        );
        res.json({ token });
      } catch (error) {
        res.json({ error });
      }
    }
  )
  .post(
    '/sign-in',
    body('email').isEmail(),
    body('password').isLength({ min: 8, max: 16 }),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { email, password } = req.body;
      try {
        const user = await User.findOne({ email });
        if (!user) return res.json({ error: 'not found' });

        const verify = await argon2.verify(user.password, password);
        if (!verify) return res.json({ error: 'wrong password' });

        const { _id, fullName } = user;
        const token = jwt.sign(
          { fullName, email, _id },
          process.env.JWT_SECRET,
          {
            expiresIn: process.env.JWT_EXPIRES,
          }
        );
        res.json({ token });
      } catch (error) {
        console.log(error);
        res.json({ error });
      }
    }
  )
  .put('/:id', async (req, res) => {
    const id = req.params.id;
    const { fullName, email, password } = req.body;
    try {
      const user = await User.findById(id);
      if (!user) {
        return res.json({ error: 'not found' });
      }

      if (fullName) user.fullName = fullName;
      if (email) user.email = email;
      if (password) user.password = password;
      await user.save();
      res.json({ user });
    } catch (error) {
      res.json({ error });
    }
  });

export default router;
