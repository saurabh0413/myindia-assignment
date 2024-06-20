const ProductRepository = require("../repository/product-repository");

class ProductService {
  constructor() {
    this.productRepository = new ProductRepository();
  }

  async createProduct(data) {
    try {
      const product = await this.productRepository.create(data);
      return product;
    } catch (error) {
      throw error;
    }
  }

  async getProducts() {
    try {
      const products = await this.productRepository.getAll();
      return products;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductService;
