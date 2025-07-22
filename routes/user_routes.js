const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');
const productController = require('../controllers/product_controller');



router.get(
  "/" , productController.home
);

router.get(
  "/about", productController.about
);

router.get(
  "/contact", productController.contact
);

router.get(
    "/add",productController.AddProduct
);
router.post(
  "/add", productController.postProduct
  
);
router.get(
  "/list", productController.Productlist
);
router.get('/data', productController.getProductData);
module.exports = router;
