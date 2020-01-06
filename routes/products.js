const express = require('express');
const products = express.Router();
const productsDB  = require("../model/productsDB")

// 1
products.get('/product', (req,res) => {
   var data = productsDB.selectData()
   data.then((Response)=>{
      res.json(Response)
   }).catch((err)=>{
      console.log(err)
      res.send(err)
   })
});

// 2
products.get('/products/:search_value', (req,res) => {
   var search_value = req.params.search_value
   var data = productsDB.select_products_search(search_value)
   data.then((Response)=>{
      res.json(Response)
   }).catch((err)=>{
      console.log(err)
      res.send(err)
   })
});

// 3
products.get('/product/:product_id', (req,res) => {
   var product_id = req.params.product_id
   var data = productsDB.select_product_id(product_id)
   data.then((Response)=>{
      res.json(Response)
   }).catch((err)=>{
      console.log(err)
      res.send(err)
   })
});

// 4
products.get('/products/inCategory/:category_id', (req,res) => {
   var category_id = req.params.category_id
   var data = productsDB.select_inCategory_category_id(category_id)
   data.then((Response)=>{
      res.json(Response)
   }).catch((err)=>{
      console.log(err)
      res.send(err)
   })
});

// 5
products.get('/products/inDepartment/:department_id', (req,res) => {
   var department_id = req.params.department_id
   var data = productsDB.select_inDepartment_department_id(department_id)
   data.then((Response)=>{
      res.json(Response)
   }).catch((err)=>{
      console.log(err)
      res.send(err)
   })
});

// 6
products.get('/products/details/:product_id', (req,res) => {
   var product_id = req.params.product_id
   var data = productsDB.select_details_product_id(product_id)
   data.then((Response)=>{
      res.json(Response)
   }).catch((err)=>{
      console.log(err)
      res.send(err)
   })
});

// 7
products.get('/products/locations/:product_id', (req,res) => {
   var product_id = req.params.product_id
   var data = productsDB.select_locations_product_id(product_id)
   data.then((Response)=>{
      res.json(Response)
   }).catch((err)=>{
      console.log(err)
      res.send(err)
   })
});

// 8
products.get('/products/reviews/:product_id', (req,res) => {
   var product_id = req.params.product_id
   var data = productsDB.select_reviews_product_id(product_id)
   data.then((Response)=>{
      res.json(Response)
   }).catch((err)=>{
      console.log(err)
      res.send(err)
   })
});

// 9
products.post("/products/reviews/",(req,res)=>{
   let reviews = {
      "product_id" : req.body.product_id,
      "review_id" : req.body.review_id,
      "customer_id": req.body.customer_id,
      "review": req.body.review,
      "rating": req.body.rating,
      "created_on": new Date()
   }
   productsDB.insertdata_review(reviews)
   .then((data)=>{
      return res.send(data)
   }).catch((err)=>{
      console.log(err);
   })
});

module.exports = products
