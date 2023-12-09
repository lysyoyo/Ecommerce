const { saveProduct } = require("../../models/Product");


exports.getProductAdmin = (req, res) =>{
    const viewsData = {
        title: 'Add Product',
    };
    res.render('addProduct', viewsData);
}


exports.postProductAdmin = (req, res) => {
    const product = {
        title: req.body.title,
        name: req.body.name,
        price: req.body.price,
        brand: req.body.brand,
        items_left: req.body.items_left,
        gender: req.body.gender,
        slug: req.body.slug,
        is_in_inventory: req.body.is_in_inventory,
        imageURL: req.body.imageURL,
    };
    saveProduct(product);
    res.redirect('/');
};
