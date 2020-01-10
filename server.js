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

const customer = require('./routes/customer')
app.use('/customer', customer)

const orders = require ('./routes/orders')
app.use('/orders',orders)

const shoppingcart = require('./routes/shoppingcart')
app.use('/shoppingcart',shoppingcart)

const tax = require('./routes/tax')
app.use('/tax',tax)

const shipping = require('./routes/shipping')
app.use('/shipping',shipping)

app.listen(6000, () => {
    console.log("server is listening 6000.........")
});