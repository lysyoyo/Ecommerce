const fs = require('fs');
const path = require('path');

const rootDir = require('../utils/path.js');
const productPath = path.join(rootDir, 'data', 'products.json');

const getProductFromFile = (callback) => {
    fs.readFile(productPath, (error, productData) => {
        if (error) {
            return callback([]);
        }

        return callback(JSON.parse(productData));
    });
}

exports.saveProduct = (product) => {
    getProductFromFile((productData) => {
        productData.push(product);
        fs.writeFile(productPath, JSON.stringify(productData), (error) => {
            if (error) {
                console.log("Error:", error);
            }
        });
    });
};

exports.getAllProducts = (callback) => {
    getProductFromFile((products) => {
        callback(products);
    });
};

exports.getProductId = (productId, callback) => {
    getProductFromFile((products) => {
        const product = products.find(pd => pd.id && pd.id.toString() === productId);
        callback(product);
    });
};
