const express = require("express");
const UserController = require("../../controllers/user-controller");
const ProductController = require("../../controllers/product-controller");
const OrderController = require("../../controllers/order-controller");
const PaymentController = require("../../controllers/payment-controller");

const {
  AuthRequestValidators,
  UserAuthValidate,
} = require("../../middlewares/index");

const router = express.Router();

router.post(
  "/signup",
  AuthRequestValidators.validateUserAuth,
  UserController.signup
);
router.post(
  "/signin",
  AuthRequestValidators.validateUserAuth,
  UserController.login
);

router.get("/products", ProductController.getProducts);
router.post(
  "/products",
  UserAuthValidate.UserAuthValidate,
  ProductController.createProduct
);
router.delete(
  "/products/:id",
  UserAuthValidate.UserAuthValidate,
  ProductController.deleteProduct
);

router.post(
  "/orders",
  UserAuthValidate.UserAuthValidate,
  OrderController.createOrder
);
router.delete(
  "/orders/:id",
  UserAuthValidate.UserAuthValidate,
  OrderController.deleteOrder
);
router.get("/orders/:id", OrderController.getOrder);

router.post(
  "/payments",
  UserAuthValidate.UserAuthValidate,
  PaymentController.createPayment
);

module.exports = router;
