const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");

app.use(express.json());
app.use(cors());


// Databaase connection with MongoDB
mongoose.connect("mongodb+srv://rajib1997:Rajib9900@cluster0.uevxh21.mongodb.net/eCommerce");

// API creation
app.get("/", (req, res)=>{
  res.send("First application is running")
})


// Create image storage engine
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb)=>{
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})
const upload = multer({
  storage: storage
})

// Creating upload endpoint for images
app.use('/images', express.static('upload/images'))
app.post("/upload", upload.single('product'), (req, res)=>{
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`
  })
})

// Create scema for creating products
const Product = mongoose.model("Product",{
  id: {
    type: Number,
    required: true,
  },
  name:{
    type: String,
    required: true
  },
  image:{
    type: String,
    required: true
  },
  category:{
    type: String,
    required: true
  },
  new_price:{
    type: Number,
    required: true
  },
  old_price:{
    type: Number,
    required: true
  },
  date:{
    type: Date,
    default: Date.now
  },
  avilable:{
    type: Boolean,
    default: true
  }
});
app.post('/addproduct', async (req, res)=>{
  let products = await Product.find({});
  let id=1;
  if(products.length > 0){
    // get last project
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0]; // we have only one product in `last_product_array`
    id = last_product.id + 1; // increment `id` to generate new `id` 
  }

  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price
  });
  console.log("Product information : ", product);
  await product.save();
  console.log("Product saved in database !")
  res.json({
    success: true,
    name: req.body.name
  });
})

// Creating API to delete product
app.post('/product/delete', async (req, res)=>{
  await Product.findOneAndDelete({
    id:req.body.id
  });
  console.log("Deleted product with id : "+req.body.id);
  res.json({
    success: true,
    name: req.body.name
  })
})

// Creating API to ge list of products
app.get('/allproducts', async (req, res)=>{
  let products = await Product.find({});
  console.log("All product fetched");
  res.send(products)
})


app.listen(port, (error)=>{
  if(!error){
    console.log("Server running on port : "+port);
  }else{
    console.log("Error found in connection: "+error);
  }
});