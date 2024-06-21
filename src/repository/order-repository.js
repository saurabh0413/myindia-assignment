const Order = require("../models/order.model");
const CrudRepository = require("./crud-repository");

class OrderRepository extends CrudRepository {
  constructor() {
    super(Order);
  }
}

module.exports = OrderRepository;
