const express = require('express');
const cors = require('cors');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
//const mongoose = require('mongoose');

const connectDB = require('./connectionDatabase/connection');
const bookSchema = require('./model/bookSchema');
const cartSchema = require('./model/cartSchema');
const fbSchema = require('./model/fbSchema');
const pubsSchema = require('./model/pubsSchema');
const userSchema = require('./model/userSchema');
const orderedSchema = require('./model/orderedSchema');
const userRouter = require('./routes/user');
app.use('/users', userRouter);
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


// Middleware
app.use(bodyParser.json());

// GET endpoint to fetch all books
app.get('/books', async (req, res) => {
    try {
      let query = {};
      if (req.query.type) {
        query.type = req.query.type;
      }
      if (req.query.pub) {
        query.pub = req.query.pub;
      }
      if (req.query.language) {
        query.language = req.query.language;
      }
      const books = await bookSchema.find(query);
      res.json(books);
    } catch (error) {
      console.error('Error fetching books:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.listen(5000, (req, res)=>{
    console.log('Server is running on port no 5000!');
})
connectDB('mongodb+srv://niyateesanja:niy0206SA@cluster0.fhsfxei.mongodb.net/test');
module.exports = router;