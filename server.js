const express = require('express');
const app = express();

const deparments = require("./routes/department")
app.use("/deparments",deparments)

const categories = require('./routes/categories')
app.use('/categories',categories)

const attributes = require('./routes/attributes')
app.use('/attributes',attributes)

app.listen(6000, () => {
    console.log("6000 port pr shunta hai")
});