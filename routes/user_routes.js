const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');

router.get(
  "/" , (req , res )=>{
    res.send("Hello Home")
  }
)


router.get(
  "/login" , (req , res )=>{
    res.send("Hello Login")
  }
)
router.get(
  "/list" , userController.getAllUsers
)

router.get(
    "/addproduct",userController.addProduct
)

module.exports = router;
