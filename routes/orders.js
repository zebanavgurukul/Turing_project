const express = require('express');
// var jwt = require('jsonwebtoken');
const orders = express.Router();
const ordersDB  = require("../model/ordersDB")



module.exports = orders