// controllers/user_controller.js
const path = require('path');

const User = require('../models/user_model');


// GET all users (for view or API)
exports.getAllUsers = (req, res) => {
  res.send(User)
 
};



 



// module.exports = getUsers;