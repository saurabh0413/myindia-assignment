const PaymentService = require("../services/payment-service");
const paymentService = new PaymentService();

const createPayment = async (req, res) => {
  try {
    const response = await paymentService.createPayment(
      req.body.orderId,
      req.body
    );
    return res.status(201).json({
      success: true,
      message: "Successfully created a new payment",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      data: {},
      success: false,
      err: error.message,
    });
  }
};

module.exports = { createPayment };
