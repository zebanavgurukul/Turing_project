const express = require('express');
const shoppingcart = express.Router();
const shoppingcartDB  = require("../model/shoppingcartDB")

// 3
shoppingcart.get('/shoppingcart/:id', (req,res) => {
   var id = req.params.id
   var data = shoppingcartDB.shoppingcart(id)
   data.then((Response)=>{
      res.json(Response)
   }).catch((err)=>{
      console.log(err)
      res.send(err)
   })
});

// 6
shoppingcart.delete('/shoppingcart/moveToCart/:item_id', (req,res) => {
   var item_id = req.params.item_id
   var data = shoppingcartDB.moveToCart_item_id(item_id)
   data.then((Response)=>{
      res.json(Response)
   }).catch((err)=>{
      console.log(err)
      res.send(err)
   })
});

// 7
shoppingcart.get('/shoppingcart/totalAmount/:cart_id', (req,res) => {
   var cart_id = req.params.cart_id
   var data_1 = shoppingcartDB.totalAmount_cart_id(cart_id)
   data_1.then((data)=>{
      var total_data = {
         totalAmount : data[0]["quantity"]*data[0]["price"]
      }
      res.send(total_data)
   }).catch((err)=>{
      console.log(err)
      res.send(err)
   })
});

module.exports = shoppingcart
