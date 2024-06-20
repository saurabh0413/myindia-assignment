const express = require("express");
const UserController = require("../../controllers/user-controller");

const router = express.Router();

router.post("/signup", UserController.signup);
router.post("/signin", UserController.login);

module.exports = router;
