const express = require("express");
const cors = require("cors");
// import cors from 'cors';
// import adminRoutes from './routes/admin';
const { verifyToken } =require( "./controllers/authControllers");
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
const authRoutes = require("./routes/auth");
const {getVideos, getVideosFE}=require("./controllers/getALLVideoCards")
const {
  createOrUpdateDropdownItems,
} = require("./controllers/updateDrowpdown1");
const { getAllDropdownItems, getDropdownItemsAsFunction } = require("./controllers/getDropdown");
const { createNewProduct } = require("./controllers/addNewProducts");
const { getAllNewProducts, getAllNewProductsAPI } = require("./controllers/getAllNewProducts");
const { create } = require("./schemas/video");
const { createVideo } = require("./controllers/addVideoCard");
const { deleteProduct } = require("./controllers/deleteProduct");
const { deleteVideo } = require("./controllers/deleteVideos");
const { getAllPostDetails } = require("./controllers/getAllPostDetails");
const { deletePostByPostId } = require("./controllers/deletePost");
const { getAllProjectDetails } = require("./controllers/getAllProductDetails");
const { deleteProjectByPostId } = require("./controllers/deleteProjectById");
connect_DB();

console.log(getAllNewProducts())
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);
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

app.post("/updateDropDown", (req, res) => {
  createOrUpdateDropdownItems(req, res);
});

app.get("/getDropdown",(req,res)=>{
  getAllDropdownItems(req,res);
})

app.post("/authorize",verifyToken,(req,res)=>{
  res.status(200).json({ message: 'Authorization verified' });
})

app.delete("/deleteVideo/:id",(req,res)=>{
  deleteVideo(req,res)
})

app.get("/getVideoCardsFE",async (req,res)=>{
  try {
    const videos = await getVideosFE();

    const html = videos.map((video, index) => `
      <span id="popup-button${index + 1}" class="play-button" data-video-id="${video.videoUrl}">
        <div class="frame-95">
          <div class="frame-99">
            <div class="image0">
              <div class="rectangle0"></div>
            </div>
            <div class="img-title">
              ${video.title}
            </div>
          </div>
        </div>
      </span>
    `).join('');



    res.send(html);
  } catch (error) {
    console.error('Error fetching videos:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})
{/* <div class="dropdown">
<a href="#">New Construction Projects</a> */}
function generateDropdownHTML(data) {
  let dropdownHTML = `<div class="dropdown">
      <a href="#">${data.title}</a>
      <div class="dropdown-content">`;

  function renderSubcategories(subcategories, level) {
    let subcategoriesHTML = '';
    subcategories.forEach((subcategory) => {
      const subcategoryClass = level === 1 ? 'nested-dropdown' : level === 2 ? 'double-nested-dropdown' : 'triple-nested-dropdown';
      const contentClass = level === 1 ? 'nested-dropdown-content' : level === 2 ? 'double-nested-dropdown-content' : 'triple-nested-dropdown-content';

      subcategoriesHTML += `<div class="${subcategoryClass}">
                              <a href="products.html#${subcategory.title.toLowerCase().replace(/\s/g, '-')}">${subcategory.title}</a>`;

      if (subcategory.subcategories && subcategory.subcategories.length > 0 && level < 3) {
        subcategoriesHTML += `<div class="${contentClass}">`;
        subcategoriesHTML += renderSubcategories(subcategory.subcategories, level + 1);
        subcategoriesHTML += `</div>`;
      }
      subcategoriesHTML += '</div>';
    });
    return subcategoriesHTML;
  }

  dropdownHTML += renderSubcategories(data.subcategories, 1);
  dropdownHTML += `</div></div>`;
  return dropdownHTML;
}

// const data={
//   "allDropdownItems": [
//       {
//           "_id": "6595fbcb7daae84b634b3a1a",
//           "title": "New Construction Projects",
//           "subcategories": [
//               {
//                   "title": "Concrete Solution",
//                   "subcategories": [
//                       {
//                           "title": "ADMIXTURES"
//                       },
//                       {
//                           "title": "FIBRES"
//                       }
//                   ]
//               },
//               {
//                   "title": "Plaster Solution",
//                   "subcategories": [
//                       {
//                           "title": "ADMIXTURES"
//                       },
//                       {
//                           "title": "FIBRES"
//                       }
//                   ]
//               },
//               {
//                   "title": "Tile-Fixing Solutions",
//                   "subcategories": [
//                       {
//                           "title": "TILE ADHESIVES",
//                           "subcategories": [
//                               {
//                                   "title": "C1T"
//                               },
//                               {
//                                   "title": "C2TE"
//                               },
//                               {
//                                   "title": "C2TES1"
//                               },
//                               {
//                                   "title": "R2T"
//                               }
//                           ]
//                       },
//                       {
//                           "title": "TILE SPACERS"
//                       },
//                       {
//                           "title": "TILE PROTECTION SYSTEMS",
//                           "subcategories": [
//                               {
//                                   "title": "ROLL"
//                               },
//                               {
//                                   "title": "SHEET"
//                               }
//                           ]
//                       }
//                   ]
//               }
//           ],
//           "__v": 0
//       }
//   ]
// }

app.get("/renderProductsAPI/:title",(req,res)=>{
  getAllNewProductsAPI(req,res)
})

app.delete("/deleteProduct/:titleId/:productId",(req,res)=>{
   deleteProduct(req,res);
})

app.get('/renderProducts', async (req, res) => {
  try {
    const productsData = await getAllNewProducts();

    console.log(productsData[0]);
    let htmlResponse=`<div>`;
    productsData.map((product)=>{
    htmlResponse += `
      <div class="sub-title-2" id="${product.title.split(" ").join("-")}">${product.title}</div>
      <div class="frame-93">
    `;

    product.products.map(product => {
      htmlResponse += `
        <div class="frame-94">
          <div class="rectangle-612"></div>
          <div class="frame-91">
            <div class="image">
              <div class="rectangle"></div>
              <img src="${product.productUrl}" alt="${product.productTitle}">
            </div>
            <div class="img-title">
              ${product.productTitle}
            </div>
          </div>
        </div>
      `;
    });

    htmlResponse += `
      </div>
    `;
    })
   
    htmlResponse+=`</div>`

    res.send(htmlResponse);
  } catch (error) {
    console.error('Error retrieving products:', error);
    res.status(500).send('Failed to retrieve products');
  }
});

app.post("/createProduct",(req,res)=>{
  createNewProduct(req,res);
})

app.post("/createVideoCard",(req,res)=>{
  createVideo(req,res);
})

app.get("/getVideoCards",(req,res)=>{
  getVideos(req,res)
})

app.get("/postDetails",(req,res)=>{
  getAllPostDetails(req,res);
})

app.delete("/deletePost/:post_id",(req,res)=>{
   deletePostByPostId(req,res);
})

app.delete("/deleteProject/:project_id",(req,res)=>{
    deleteProjectByPostId(req,res);
})


app.get("/projectDetails",(req,res)=>{
  getAllProjectDetails(req,res)
})

app.get('/dropdown', async (req, res) => {
  try {

    const data = await getDropdownItemsAsFunction();
    console.log("----------------------\n\n",data)
    // const data = await response.json();

    let html = '<!DOCTYPE html><html><head><title>Dropdown Items</title></head><body><div class="dropdown">';

    const htmlStructure = generateDropdownHTML(data.allDropdownItems[0]);


    html += '</div></body></html>';

    res.send(htmlStructure);

  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

module.exports = app;
