
//const products = [];
const Product = require('../models/product');

exports.getAddProducts = (req, res, next) => {
    //console.log(' another middleware');
    res.render('add-product', { 
    pageTitleForAllPages: 'Adding Product',
     path: '/active/addingProduct', 
     formCSS:true, productCSS:true, activeAddProduct:true });
};

exports.postAddProducts = (req,res,next)=>{

    const product = new Product(req.body.title);
    product.saves();

    res.redirect('/');
};

exports.getProducts =  (req, res, next)=> {

    const products = Product.fetchingAll();

   // const product = adminDatas.product;
    res.render('shop', {
    prods: products, 
    pageTitleForAllPages: 'My Shop', 
    path: '/Shopactive', 
    hasProduct: products.length > 0,
    activeShop: true,
    
    productCSS: true,
}); //shop = shop.pug
};