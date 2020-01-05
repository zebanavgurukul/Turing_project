const express = require('express');
const categories = express.Router();
const categoriesDB  = require("../model/categoriesDB")

categories.get('/categories', (req,res) => {
    var data = categoriesDB.selectData()
    data.then((Response)=>{
       res.json(Response)
    }).catch((err)=>{
       console.log(err)
       res.send(err)
    })
});

// 2
categories.get('/categories/:id', (req,res) => {
    var id = req.params.id
    var data = categoriesDB.selectby_id(id)
    data.then((Response)=>{
       res.json(Response)
    }).catch((err)=>{
       console.log(err)
       res.send(err)
    })
});

// 3
categories.get('/categories/inProduct/:product_id', (req,res) => {
    var product_id = req.params.product_id
    var data = categoriesDB.select_product_id(product_id)
    data.then((Response) => {
        res.json(Response)
    }).catch((err) => {
        res.send(err)
    })
});

// 4
categories.get('/categories/inDepartment/:department_id', (req,res) => {
    var department_id = req.params.department_id
    var data = categoriesDB.select_department_id(department_id)
    data.then((Response) => {
        res.json(Response)
    }).catch((err) => {
        res.send(err)
    })
});

module.exports = categories
