const express = require('express');
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json())

const deparments = require("./routes/department")
app.use("/deparments",deparments)

const categories = require('./routes/categories')
app.use('/categories',categories)

const attributes = require('./routes/attributes')
app.use('/attributes',attributes)

const products = require('./routes/products')
app.use("/products",products)

const tax = require('./routes/tax')
app.use('/tax',tax)

const shipping = require('./routes/shipping')
app.use('/shipping',shipping)

const shoppingcart = require('./routes/shoppingcart')
app.use('/shoppingcart',shoppingcart)

const customer = require('./routes/customer')
app.use('/customer', customer)

const orders = require ('./routes/orders')
app.use('/orders',orders)

app.listen(6001, () => {
    console.log("6001 port pr shunta hai")
});