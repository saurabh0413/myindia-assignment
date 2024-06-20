const ProductService = require("../services/product-service");
const productService = new ProductService();

const createProduct = async (req, res) => {
  try {
    const response = await productService.createProduct({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price
    });
    return res.status(201).json({
      success: true,
      message: "Successfully created a new product",
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

const deleteProduct = async (req, res) => {
  try {
    const response = await productService.delete(req.body.id);
    return res.status(201).json({
      success: true,
      message: "Successfully deleted a new product",
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

const getProducts = async (req, res) => {
  try {
    const response = await productService.getProducts();
    return res.status(201).json({
      success: true,
      message: "Successfully fethed products",
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

module.exports = { createProduct, deleteProduct, getProducts };
