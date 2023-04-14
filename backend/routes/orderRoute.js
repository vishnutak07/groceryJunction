const express = require("express");
const router = express.Router();

const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

const { isAuthenticateUser, authorizedRoles } = require("../middleware/auth");

router.route("/order/new").post(isAuthenticateUser, newOrder);

router.route("/order/:id").get(isAuthenticateUser, getSingleOrder);

router.route("/orders/me").get(isAuthenticateUser, myOrders);

router
  .route("/admin/orders")
  .get(isAuthenticateUser, authorizedRoles("admin"), getAllOrders);

router
  .route("/admin/order/:id")
  .put(isAuthenticateUser, authorizedRoles("admin"), updateOrder)
  .delete(isAuthenticateUser, authorizedRoles("admin"), deleteOrder);

module.exports = router;
