const express = require("express");
const cors = require("cors");
// import cors from 'cors';
// import adminRoutes from './routes/admin';

const adminRoutes = require("./routes/admin");
const app = express();
const port = 3000;
// const ConnectToDb = require("./connect");
app.use(cors());
app.use(express.json());
const { addPost } = require("./controllers/addPost");
const connect_DB = require("./connect");
const { getAllPosts } = require("./controllers/getAllPosts");
const { getPostById } = require("./controllers/getPostByPostId");
const { getAllProducts } = require("./controllers/getAllProducts");
const { addProduct } = require("./controllers/addProducts");
const { getProductById } = require("./controllers/getProductByProductId");
connect_DB();

app.use("/admin", adminRoutes);
app.get("/getAllPost", (req, res) => {
  getAllPosts(req, res);
});

app.get("/getAllProducts", (req, res) => {
  getAllProducts(req, res);
});

app.get("/blogs/:post_id", (req, res) => {
  getPostById(req, res);
});

app.get("/products/:post_id", (req, res) => {
  getProductById(req, res);
});

app.post("/addPost", (req, res) => {
  addPost(req, res);
});

app.post("/addProduct", (req, res) => {
  addProduct(req, res);
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
module.exports = app;
