const Payment = require("../models/payment.model");
const OrderRepository = require("../repository/order-repository");
const nock = require("nock");
class PaymentService {
  constructor() {
    this.orderRepository = new OrderRepository();
  }

  async createPayment(userId, paymentData) {
    try {
      const order = await this.orderRepository.get(paymentData.orderId);
      if (!order) {
        throw new Error("Order not found");
      }

      const payment = new Payment({
        order: order._id,
        user: userId,
        amount: order.total,
        status: "Pending",
        paymentMethod: paymentData.paymentMethod,
        paymentDetails: paymentData.paymentDetails,
      });

      await payment.save();

      payment.status = "Completed";
      await payment.save();

      return payment;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PaymentService;
