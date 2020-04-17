const express = require('express');
const departments = express();
const departmentDb  = require("../model/departmentDB")

//  1 
departments.get('/department', (req,res) => {
    var data = departmentDb.selectData()
    data.then((Response)=>{
       res.json(Response)
    }).catch((err)=>{
       console.log(err)
       res.send(err)
    })
});

// 2
departments.get('/departments/:id', (req,res) => {
    var id = req.params.id
    var data = departmentDb.selectby_id(id)
    data.then((Response)=>{
       res.json(Response)
    }).catch((err)=>{
       console.log(err)
       res.send(err)
    })
});

module.exports = departments