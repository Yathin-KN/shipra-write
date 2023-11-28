
const express = require('express');
const cors=require('cors')
const adminRoutes=require('./routes/admin')
const app = express();
const port = 3000; 
// const ConnectToDb = require("./connect");
app.use(cors())
app.use(express.json());
const { addPost }=require('./controllers/addPost');
const connect_DB = require('./connect');
const { getAllPosts } = require('./controllers/getAllPosts');
const { getPostById } = require('./controllers/getPostByPostId');
connect_DB();

app.use('/admin', adminRoutes);
app.get('/', (req, res) => {
    getAllPosts(req,res)
});

app.get('/blogs/:post_id', (req, res) => {
    getPostById(req,res)
  });

  app.post('/addPost',(req,res)=>{
    addPost(req,res);
  })
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

