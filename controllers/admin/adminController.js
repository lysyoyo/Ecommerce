const { saveProduct } = require("../../models/Product");
const path = require('path');

exports.getProductAdmin = (req, res) =>{
    const viewsData = {
        title: 'Add Product',
    };
    res.render('addProduct', viewsData);
}


exports.postProductAdmin = (req, res) => {
    const product = {
        id:Date.now(),
        title: req.body.title,
        name: req.body.name,
        price: req.body.price,
        brand: req.body.brand,
        items_left: req.body.items_left,
        gender: req.body.gender,
        slug: req.body.slug,
        reduction: req.body.reduction,
        is_in_inventory: req.body.is_in_inventory,
        prix_initial:req.body.prix_initial,
        imageURL: req.file ? path.join('uploads', req.file.filename) : '', // Save the file path
    };
    saveProduct(product);
    res.redirect('/');
};
