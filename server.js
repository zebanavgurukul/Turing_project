const express = require('express');
const app = express();

const deparments = require("./routes/department")
app.use("/deparments",deparments)

const categories = require('./routes/categories')
app.use('/categories',categories)

app.listen(6000, () => {
    console.log("6000 port pr shunta hai")
});