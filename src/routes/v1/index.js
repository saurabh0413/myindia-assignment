const express = require("express");
const UserController = require("../../controllers/user-controller");
const ProductController = require("../../controllers/product-controller");
const { AuthRequestValidators } = require("../../middlewares/index");

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
router.post("/products", ProductController.createProduct);
router.delete("/products/:id", ProductController.deleteProduct);

module.exports = router;
