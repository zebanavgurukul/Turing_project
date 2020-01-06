const express = require('express');
const tax = express.Router();
const taxDB  = require("../model/taxDB")

// 1
tax.get('/tax', (req,res) => {
   var data = taxDB.selectData()
   data.then((Response)=>{
      res.json(Response)
   }).catch((err)=>{
      console.log(err)
      res.send(err)
   })
});

// 2
tax.get('/tax/:id', (req,res) => {
    var id = req.params.id
    var data = taxDB.selectby_id(id)
    data.then((Response)=>{
       res.json(Response)
    }).catch((err)=>{
       console.log(err)
       res.send(err)
    })
});

module.exports = tax
