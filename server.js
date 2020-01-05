const express = require('express');
const app = express();

const deparments = require("./routes/department")
app.use("/deparments",deparments)

app.listen(7000, () => {
    console.log("7000 port pr shunta hai")
});