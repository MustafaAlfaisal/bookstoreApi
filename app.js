// Dependencies
const express = require('express');
const app = express();
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const auth =  require('./middleware/auth');
const usersRoutes = require('./routes/user');
const bookRoutes = require('./routes/book');
const mongoose = require('mongoose');
const helmet = require('helmet');
const compression = require('compression');
const fileUpload = require('express-fileupload');

const PORT = process.env.PORT || 5000


//  Starting MongoDB connection
mongoose.connect('mongodb://admin:admin1234@ds127624.mlab.com:27624/camp', { useNewUrlParser: true });

//  To Check if the connection works fine or not
mongoose.connection.on('connected', () => {
  console.log('\x1b[36m%s\x1b[0m', 'mongo has been connected...');
});

// MiddleWare
app.use(express.json());
// MiddleWare to get the files
app.use(fileUpload());
// For serving images and other static data
app.use(express.static('public'));
// Route MiddleWare for any route that start with (/api/user)
app.use('/api/user', usersRoutes);
app.use('/api/post',bookRoutes);

// Home Router
app.get('/', (req, res) => {
  const token = jwt.sign({"name":"Mustafa", "age": 23}, 'key');
  res.send(token);
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});