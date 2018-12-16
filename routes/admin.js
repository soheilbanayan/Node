const path = require('path');
const express = require('express');
const route = express.Router();//function to execute
const productsControllers = require('../controllers/products');


//const rootDir = require('../util-help/path');
 

//admin/add-product => GETT
route.get('/add-product', productsControllers.getAddProducts);

//admin/add-product => POST
route.post('/add-product', productsControllers.postAddProducts );

module.exports = route;