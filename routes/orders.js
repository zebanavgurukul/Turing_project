const express = require('express');
const orders = express();
const ordersDB  = require("../model/ordersDB")

// 1
orders.post("/order/add/:cart_id",(req,res)=>{
    var cart_id = req.params.cart_id
    var data_1 = ordersDB.totalAmount_orders(cart_id)
    data_1.then((data)=>{
    var total_data = data[0]["quantity"]*data[0]["price"]
    let add = {
        "order_id": req.body.order_id,
        "total_amount" : total_data,
        "created_on" : new Date(),
        "shipped_on": new Date(),
        "status": req.body.status,
        "comments": req.body.comments,
        "customer_id": req.body.customer_id,
        "shipping_id" : req.body.shipping_id,
        "tax_id" : req.body.tax_id
    }
    ordersDB.insertdata_add_orders(add)
    .then(()=>{
       res.send('insert')
    }).catch((err)=>{
       console.log(err)
       res.send(err)
    })
    })
});

// 2
orders.get('/orders/:order_id', (req,res) => {
    var order_id = req.params.order_id
    var data_1 = ordersDB.orders_order_id(order_id)
    data_1.then((data)=>{
    var unit_cost = data[0]["quantity"]*data[0]["price"]
    let add = {
        item_id : data[0]['item_id'],
        order_id : data[0]['order_id'],
        product_id : data[0]['product_id'],
        attributes : data[0]['attributes'],
        quantity : data[0]['quantity'],
        product_name : data[0]['name'],
        unit_cost : unit_cost
    }
    ordersDB.orders(add)
    .then(()=>{
        res.send('insert')
    })
    let alldata = ordersDB.order_get(order_id)
    alldata.then((orderdata) => {
        var subtotal = orderdata[0]["quantity"]*orderdata[0]["price"]
        // console.log(orderdata)
    let allorders = {
        order_id : orderdata[0]['order_id'],
        product_id : orderdata[0]['product_id'],
        attributes : orderdata[0]['attributes'],
        product_name : orderdata[0]['product_name'],
        quantity : orderdata[0]['quantity'],
        unit_cost : orderdata[0]['unit_cost'],
        subtotal : subtotal
    }
    res.send(allorders)
    })
    })
});

// 3
orders.get('/orders', (req,res) => {
    var data = ordersDB.orderData()
    data.then((Response)=>{
       res.json(Response)
    }).catch((err)=>{
       console.log(err)
       res.send(err)
    })
});

// 4
orders.get('/attribute/:order_id', (req,res) => {
    var order_id = req.params.order_id
    var data = ordersDB.shortDetail_order_id(order_id)
    data.then((Response)=>{
       res.json(Response)
    }).catch((err)=>{
       console.log(err)
       res.send(err)
    })
});

module.exports = orders
