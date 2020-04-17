const express = require('express');
var jwt = require('jsonwebtoken');
const customer = express();
const customerDB  = require("../model/customerDB")

// 1
customer.put('/customers/:customer_id',(req,res)=>{
    var customer_id = req.params.customer_id
    var updata = {
        "name":req.body.name,
        "email":req.body.email,
        "password":req.body.password
    }
    customerDB.putCustomer(updata,customer_id)
    .then((result)=>{
        res.json("table updated!...")
    }).catch((err)=>{
        res.send(err)
    })
});

// 2
customer.get('/customers', (req,res) => {
    var data = customerDB.selectcustomer()
    data.then((Response)=>{
        res.json(Response)
    }).catch((err)=>{
        console.log(err)
        res.send(err)
    })
});

// 3
customer.post("/customers",(req,res)=>{
    let post_data = {
       "customer_id" : req.body.customer_id,
       "name" : req.body.name,
       "email": req.body.email,
       "password": req.body.password,
       "mob_phone": req.body.mob_phone,
       "country": req.body.country,
       "shipping_region_id" : req.body.shipping_region_id,
       "city" : req.body.city
    }
    customerDB.insertdata_customers(post_data)
    .then((data)=>{
       return res.send(data)
    }).catch((err)=>{
       console.log(err);
    })
});

// 4 
customer.post("/customers/login",(req,res)=>{
    let email = req.body.email;
    let password = req.body.password;
    customerDB.customers_login(email)
    .then((data)=>{
        if(data.length==0){
            res.send('worng email')
        }else{customerDB.else_login(password).then((data)=>{
            if(data.length==0){
                res.send('wrong password ')
            }else{
                let token = jwt.sign({"costomer":data},"zeba")
                    res.cookie(token)
                    res.send('loing successful')
                }
            })
        }
    }).catch((err)=>{
        console.log(err);
    })
});

// 6
customer.put('/customers/address/:customer_id', (req, res) => {
    var customer_id = req.params.customer_id
    var alltoken = req.headers.cookie
    var token = alltoken.split('=')
    token = (token[token.length-2]).slice(11,300)
    jwt.verify(token, 'zeba', (err,data) => {
        for(let i = 0; i < data['costomer'].length; i++)
        var password = data['costomer'][i]['password']
        let updata=({
            "name" : req.body.name,
            "address_1" : req.body.address_1,
            "address_2" : req.body.address_2
        })
        customerDB.customers_address(updata,customer_id)
        .then(()=>{
            res.send('update')
        }).catch((err)=>{
            res.send(err)
        })
    })
});

// 7
customer.put('/customers_creditCard/:customer_id', (req, res) => {
    var customer_id = req.params.customer_id
    var alltoken = req.headers.cookie
    var token = alltoken.split('=')
    token = (token[token.length-2]).slice(11,300)
    jwt.verify(token, 'zeba', (err,data) => {
        for(let i = 0; i < data['costomer'].length; i++)
        var password = data['costomer'][i]['password']
        let updata=({
            "credit_card": req.body.credit_card,
            "name" : req.body.name
        })
        customerDB.customers_creditCard(updata,customer_id)
        .then(()=>{
            res.send('update')
        }).catch((err)=>{
            res.send(err)
        })
    })
});

module.exports = customer
