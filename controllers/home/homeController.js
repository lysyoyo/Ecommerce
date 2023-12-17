const { getAllProducts, getProductId } = require('../../models/Product.js');

exports.getHomePage = (req, res) => {
    getAllProducts((products) => {
        const dataView = {
            products: products,
            pageTitle: 'Home Page'
        };
        res.render('index', dataView);
    });
};

exports.getProductId = (req, res) => {
    const productId = req.params.productId;
    getProductId(productId, (product) => {
        if (product) {
            const dataView = {
                product,
                pageTitle: product.pageTitle || 'Product Details'
            };
            res.render('productDetails', dataView);
        } else {
            res.status(404).send('Product not found');
        }
    });
};
