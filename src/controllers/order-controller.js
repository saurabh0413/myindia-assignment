const OrderService = require("../services/order-service");
const orderService = new OrderService();

const createOrder = async (req, res) => {
  try {
    const response = await orderService.createOrder(
      req.body.user,
      req.body.products
    );
    return res.status(201).json({
      success: true,
      message: "Successfully created a new order",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      data: {},
      success: false,
      err: error,
    });
  }
};

const deleteOrder = async (req, res) => {
  console.log(req.params.id);
  try {
    const response = await orderService.deleteOrder(req.params.id);
    return res.status(201).json({
      success: true,
      message: "Successfully deleted order",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      data: {},
      success: false,
      err: error,
    });
  }
};

const getOrder = async (req, res) => {
  try {
    const response = await orderService.getOrder(req.params.id);
    return res.status(201).json({
      success: true,
      message: "Successfully fetched order",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      data: {},
      success: false,
      err: error,
    });
  }
};

module.exports = { createOrder, deleteOrder, getOrder };
