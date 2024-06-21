const Order = require("../models/order.model");
const OrderRepository = require("../repository/order-repository");
const ProductRepository = require("../repository/product-repository");

class OrderService {
  constructor() {
    this.orderRepository = new OrderRepository();
    this.productRepository = new ProductRepository();
  }

  async createOrder(userId, products) {
    console.log(userId, products, "in service");
    try {
      let total = 0;
      const productDetails = [];

      for (const item of products) {
        const product = await this.productRepository.get(item.productId);
        if (!product) {
          throw new Error(`Product not found: ${item.productId}`);
        }

        const subtotal = product.price * item.quantity;
        total += subtotal;

        productDetails.push({
          product: product.id,
          quantity: item.quantity,
          price: product.price,
          subtotal: subtotal,
        });
      }
      const newOrder = new Order({
        user: userId,
        products: productDetails,
        total: total,
      });

      const order = await this.orderRepository.create(newOrder);
      return order;
    } catch (error) {
      throw error;
    }
  }

  async deleteOrder(orderId) {
    try {
      const result = await this.orderRepository.delete(orderId);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrderService;
