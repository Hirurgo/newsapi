import mongoose from 'mongoose';
import passport from 'passport';
import express, { Router } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import { secret } from '../config';
import auth from '../config/passport';

auth(passport);
const router = Router();

router.post('/signup', (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.json({
      success: false,
      msg: 'Please pass username and password.'
    });
  } 
  
  const newUser = new User(req.body);
  newUser.save(error => res.json({
    success: error ? false : true,
    msg: error ? 'Username already exists.' : 'Successful created new user.'
  }));
});

router.post('/signin', (req, res) => {
  User.findOne(
    { username: req.body.username },
    (err, user) => {
      if (err) throw err;    
      user.comparePassword(
        req.body.password.toString(),
        (err, isMatch) => {
          if (user && isMatch && !err) return res.json({
            success: true,
            token: 'JWT ' + jwt.sign(user.toJSON(), secret),
            user
          });
          
          return res.status(401).send({
            success: false,
            msg: 'Authentication failed. Wrong Username or Password.'
          });
        }
      );
    }
  );
});

export default router;
