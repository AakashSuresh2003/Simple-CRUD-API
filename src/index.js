const express = require('express');
const mongoose = require('mongoose');
const Product = require("./models/products.model")
const productRoute = require("./routes/product.route.js")
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

mongoose.connect('mongodb://localhost:27017/crudApp')
.then(()=>{console.log("Connected to the database")})
.catch((err)=>{console.log(err)})

app.use("/api/products", productRoute); 

app.get('/',(req,res)=>{
    res.send("Hello from Node API");
})

app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000");
})