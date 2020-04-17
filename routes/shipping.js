const express = require('express');
const shipping = express();
const shippingDB  = require("../model/shippingDB")

// 1
shipping.get('/shipping', (req,res) => {
    var data = shippingDB.selectData()
    data.then((Response)=>{
       res.json(Response)
    }).catch((err)=>{
       console.log(err)
       res.send(err)
    })
});

// 2
shipping.get('/shipping/:id', (req,res) => {
    var id = req.params.id
    var data = shippingDB.selectby_id(id)
    data.then((Response)=>{
       res.json(Response)
    }).catch((err)=>{
       console.log(err)
       res.send(err)
    })
});

module.exports = shipping