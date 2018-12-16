const path = require('path');
//const rootDir2 = require('../util-help/path');
const express = require('express');
const route = express.Router();//function to execute
//const adminDatas = require('./admin');
const productController = require('../controllers/products');

route.get('/', productController.getProducts);

module.exports = route;