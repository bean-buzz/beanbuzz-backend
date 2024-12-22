
const {Order} = require("../../models/OrderModel.js");
const { dbConnect, dbClose } = require("../../functions/dbFunctions.js");


async function deleteOrders() {
    try {
      await dbConnect();
      await Order.deleteMany({});
      console.log("Orders in order collection have been deleted");
      await dbClose();
    } catch (error) {
      console.log(
        "Error! Couldn't delete orders in order collection",
        error
      );
    }
  }
  
  deleteOrders();
  
  