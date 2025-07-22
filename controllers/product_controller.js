const path = require('path');
const fs = require('fs');

const dataFile = path.join(__dirname, '../data/products.json');
const home_page = path.join(__dirname, '../view/home_page.html');
const about_page = path.join(__dirname, '../view/about_page.html');  
const contact_page = path.join(__dirname, '../view/contact_page.html');


exports.home = (req, res) => {
  res.sendFile(home_page);
},

exports.about = (req, res) => {
  res.sendFile(about_page);
}

exports.contact = (req, res) => {
  res.sendFile(contact_page);
}
// Helper to read products
function readProducts() {
  if (!fs.existsSync(dataFile)) return [];
  const data = fs.readFileSync(dataFile);
  return JSON.parse(data);
}

// Helper to write products
function writeProducts(products) {
  fs.writeFileSync(dataFile, JSON.stringify(products, null, 2));
}

exports.AddProduct = (req, res) => {
  res.sendFile(path.join(__dirname, '../view/add_product.html'));
};

exports.postProduct = (req, res) => {
  const { image, category, name, price, description } = req.body;
  const products = readProducts();
  const newProduct = { image, category, name, price, description };
  products.push(newProduct);
  writeProducts(products);
  res.redirect('/list');
};

exports.Productlist = (req, res) => {
  res.sendFile(path.join(__dirname, '../view/product_list.html'));
};

// Return all products for AJAX
exports.getProductData = (req, res) => {
  const products = readProducts();
  res.json(products);

};
