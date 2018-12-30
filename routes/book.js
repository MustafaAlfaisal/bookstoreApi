// Dependencies
const express = require('express');
const router = express.Router();
const Joi = require('joi');
const mongoose = require('mongoose');
const book = require('../models/books');



// Adding a new User
router.post('/', (req, res) => {
  const book = new book({
    user: req.body.user_id,
    title: req.body.title,
    description: req.body.description,
  });
  book.save().then(result => {
    res.send(result);
  }).catch(err =>{
    res.send(err);
  });
});


router.get('/user/:id', (req, res) => {
  book.find({user: req.params.id})
  .populate('user') //  Getting the user info because we have set a ref in the book Schema
  .then(result => {
    res.send(result);
  }).catch(err => {
    res.send(err);
  });
});


router.get('/:id', (req, res) => {
  book.findById(req.params.id)
  .populate('user') //  Getting the user info because we have set a ref in the book Schema
  .then(result => {
    res.send(result);
  }).catch(err => {
    res.send(err);
  });
});


module.exports = router;
