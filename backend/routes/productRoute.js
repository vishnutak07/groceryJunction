const express = require('express');
const { getAllProducts,createProduct,updateProduct, deleteProduct, getProductDetails, createProductReview, getAllProductReviews, deleteReview } = require('../controllers/productController');
const { isAuthenticateUser ,authorizedRoles} = require('../middleware/auth');

const router = express.Router();


router.route("/products").get(getAllProducts);

router.route("/admin/product/new").post(isAuthenticateUser,authorizedRoles('admin'),createProduct);

router.route("/admin/product/:id").put(isAuthenticateUser,authorizedRoles('admin'),updateProduct);

router.route("/admin/product/:id").delete(isAuthenticateUser,authorizedRoles('admin'),deleteProduct);

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticateUser,createProductReview);

router.route("/reviews").get(getAllProductReviews).delete(isAuthenticateUser,deleteReview)



module.exports = router;