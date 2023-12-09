const fs = require('fs');
const path = require('path');

const rootDir = require('../utils/path.js');
const productPath = path.join(rootDir, 'data', 'products.json');

exports.saveProduct = (product) => {
    fs.readFile(productPath, 'utf8', (error, productData) => {
        let products = [];

        if (!error) {
            products = JSON.parse(productData);
        }

        products.push(product);

        fs.writeFile(productPath, JSON.stringify(products), 'utf8', (error) => {
            if (error) {
                console.log(error);
            }
        });
    });
};

exports.getAllProducts = () => {
    try {
        // Check if the file exists
        fs.accessSync(productPath, fs.constants.F_OK);

        const productData = fs.readFileSync(productPath, 'utf8');
        return JSON.parse(productData);
    } catch (error) {
        // If the file doesn't exist, create an empty array
        console.log(`File does not exist at ${productPath}. Creating a new file.`);
        fs.writeFileSync(productPath, '[]', 'utf8');
        return [];
    }
};
