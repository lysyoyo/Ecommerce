
const { getAllProducts } = require('../../models/Product.js');


exports.getHomePage = (req, res)=>{
    const dataView = {
        products:getAllProducts(),
        pageTitle:'Home Page'
    }
    res.render('index',  dataView);
}