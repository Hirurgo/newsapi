import mongoose from 'mongoose';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import express, { Router } from 'express';
import User from '../models/User';
import Article from '../models/Article';
import auth from '../auth';

auth(passport);
const router = Router();
const authenticate = passport.authenticate('jwt', { session: false });


router.post('/articles',
  authenticate,
  (req, res) => {
    new Article({
      ...req.body,
      isEditable: true
    })
    .save(error => res.json({
      success: error ? false : true,
      msg: error ? 'Save article failed.' : 'Successful created new article.'
    }));
  }
);


router.get('/articles',
  authenticate,
  (req, res) => Article
    .find()
    .limit(+req.query.pageSize || 1000)
    .skip(req.query.page && req.query.pageSize ? (req.query.page - 1) * req.query.pageSize : 0)
    .exec((error, articles) => error ? req.next(error) : res.json(articles))
);


router.get('/articles/:url',
  authenticate,
  (req, res) => Article
    .findOne(
      { url: req.params.url },
      (error, articles) => error ? req.next(error) : res.json(articles)
    )
);


router.delete('/articles/:url',
  authenticate,
  (req, res) => Article
    .deleteOne(
      { url: req.params.url },
      (error, articles) => error? req.next(err) : res.json({ success: true, msg: 'Article deleted' })
    )
);


router.put('/articles/:url',
  authenticate,
  (req, res) => Article
    .findOne(
      { url: req.params.url },
      (error, article) => {
        if (error) return req.next(error);
        if (!article)return res.status(404).send({ success: false, msg: 'Article not found' });
        article.title = req.body.title;
        article.content = req.body.content;
        article.author = req.body.author;
        article.description = req.body.description;
        article.url = req.body.url;
        article.urlToImage = req.body.urlToImage;
        article.isLocalUrlToImage = req.body.isLocalUrlToImage;
        article.publishedAt = req.body.publishedAt;
        article.isEditable = true;
        article.save(error => res.json({
          success: error ? false : true,
          msg:  error ? 'Save article failed.' : 'Successfully created new article.'
        }));
    }
  )
);

export default router;
