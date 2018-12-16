
const products = [];

module.exports = class Product {
    constructor(prop) {
        this.title = prop;
    }

    saves() {
        products.push(this);
    }

    static fetchingAll() {
        return products;


    }

}