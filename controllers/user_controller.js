// controllers/user_controller.js
const path = require('path');

const User = require('../models/user_model');
const addproduct = path.join(__dirname, '../view/add_product.html')

// GET all users (for view or API)
exports.getAllUsers = (req, res) => {
  res.send(User)
 
};
exports.addProduct = (req, res) => {
  res.sendFile(addproduct);
}



 



// module.exports = getUsers;