const express = require('express');
const randomString = require('random-string');
let generateUniqueId = randomString();
const shoppingcart = express.Router();
const shoppingcartDB  = require("../model/shoppingcartDB")

// 1
shoppingcart.get('/shoppingcart/generateUniqueId/:cart_id', (req,res) => {
   var cart_id = req.params.cart_id
   let total_data = {
      cart_id : generateUniqueId
   }
   shoppingcartDB.shoppingcart_generateUniqueId(total_data,cart_id)
   .then(()=>{
      return res.send(total_data)
   }).catch((err)=>{
      console.log(err);
   })
});

// 2
shoppingcart.post("/shoppingcart/add",(req,res)=>{
   let add = {
      "item_id": req.body.item_id,
      "cart_id": req.body.cart_id,
      "quantity": req.body.quantity,
      "product_id": req.body.product_id,
      "attributes": req.body.attributes,
      "added_on": new Date()
   }
   shoppingcartDB.insertdata_add(add)
   .then((data)=>{
      return res.send(data)
   }).catch((err)=>{
      console.log(err);
   })
});

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

// 4
shoppingcart.put("/shoppingcart/updata/:item_id",(req,res)=>{
   var item_id = req.params.item_id
   shoppingcartDB.insertdata_updata(item_id)
   .then((data)=>{
      let updata = {
         item_id : data[0]['item_id'],
         attributes : data[0]['attributes'],
         quantity : data[0]['quantity'],
         product_id : data[0]['product_id'],
         price : data[0]['price'],
         name : data[0]['name'],
         subtotal : data[0]['price']*data[0]['quantity']
      }
      res.json(updata)
   }).catch((err)=>{
      console.log(err)
      res.send(err)
});

// 5
shoppingcart.delete('/shoppingcart_empty/:cart_id', (req,res) => {
   var cart_id = req.params.cart_id
   var data = shoppingcartDB.shoppingcart_empty(cart_id)
   data.then((Response)=>{
      res.json(Response)
   }).catch((err)=>{
      console.log(err)
      res.send(err)
   })
});

// 6
shoppingcart.get("/shoppingcart/moveToCart/:item_id",(req,res)=>{
   var item_id = req.params.item_id;
   var getData = shoppingcartDB.moveToCart_item_id(item_id)
   getData.then((data)=>{
      var inserted = shoppingcartDB.moveToCart(data)
      inserted.then((resp)=>{
         var deleted = shoppingcartDB.moveToCartsave(item_id)
         deleted.then((resps)=>{
            res.send("Deleted...")
         })
      })
   }).catch((err)=>{
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

// 8
shoppingcart.get("/saveForLater/:item_id",(req,res)=>{
   var item_id = req.params.item_id;
   var getData = shoppingcartDB.saveForLater_item_id(item_id)
   getData.then((data)=>{
      var inserted = shoppingcartDB.saveForLater(data)
      inserted.then((resp)=>{
         var deleted = shoppingcartDB.save(item_id)
         deleted.then((resps)=>{
            res.send("Deleted...")
         })
      })
   }).catch((err)=>{
      res.send(err)
   })
});

// 9
shoppingcart.get('/shoppingcart_getSaved/:cart_id', (req,res) => {
   var cart_id = req.params.cart_id
   var data = shoppingcartDB.shoppingcart(cart_id)
   data.then((Response)=>{
      res.json(Response)
   }).catch((err)=>{
      console.log(err)
      res.send(err)
   })
});

// 10
shoppingcart.delete('/shoppingcart_removeProduct/:item_id', (req,res) => {
   var item_id = req.params.item_id
   var data = shoppingcartDB.removeProduct_item_id(item_id)
   data.then((Response)=>{
      res.json(Response)
   }).catch((err)=>{
      console.log(err)
      res.send(err)
   })
})
});

module.exports = shoppingcart