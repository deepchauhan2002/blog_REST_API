const express = require('express')
const mongoose = require('mongoose')
const cors=require('cors')
require('dotenv').config()
const blogController = require('./controllers/blog-controller')
const app = express()

app.use(express.json())
app.use(cors())

app.get('/posts/:id', blogController.getBlogById)
app.get('/posts',blogController.getallBlogs)

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xuwb6.mongodb.net/${process.env.DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });