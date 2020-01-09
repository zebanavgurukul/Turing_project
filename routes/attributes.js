const express = require('express');
const attributes = express.Router();
const attributesDB  = require("../model/attributesDB")

// 1
attributes.get('/attributes', (req,res) => {
   var data = attributesDB.selectData()
   data.then((Response)=>{
      res.json(Response)
   }).catch((err)=>{
      console.log(err)
      res.send(err)
   })
});

// 2
attributes.get('/attribute/:id', (req,res) => {
   var id = req.params.id
   var data = attributesDB.selectby_id(id)
   data.then((Response)=>{
      res.json(Response)
   }).catch((err)=>{
      console.log(err)
      res.send(err)
   })
});

// 3
attributes.get('/attributes/values/:attribute_id', (req,res) => {
   var attribute_id = req.params.attribute_id
   var data = attributesDB.select_attribute_value_id(attribute_id)
   data.then((Response)=>{
      res.json(Response)
   }).catch((err)=>{
      console.log(err)
      res.send(err)
   })
})

// 4
attributes.get('/attributes/inProduct/:product_id', (req,res) => {
   var product_id = req.params.product_id
   var data = attributesDB.select_attributes_inProduct(product_id)
   data.then((Response)=>{
      res.json(Response)
   }).catch((err)=>{
      console.log(err)
      res.send(err)
   })
})

module.exports = attributes
