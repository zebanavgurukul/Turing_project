const express = require("express");
const tax = express.Router();
const taxDB  = require("../model/taxDB")

// 1
tax.get("/tax", (req,res) => {
   var data = taxDB.selectData()
   data.then((Response)=>{
      res.json(Response)
   }).catch((err)=>{
      console.log(err)
      res.send(err)
   })
});

// 2
tax.get("/tax/:tax_id", (req,res) => {
   var tax_id = req.params.tax_id
   var data = taxDB.selectby_id(tax_id)
   data.then((Response)=>{
      res.json(Response)
   }).catch((err)=>{
      console.log(err)
      res.send(err)
   })
});

module.exports = tax
