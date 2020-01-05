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

app.listen(6000, () => {
    console.log("6000 port pr shunta hai")
});