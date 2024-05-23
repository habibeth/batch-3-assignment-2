"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
const order_model_1 = require("./order.model");
const createOrderIntoDB = async (orderData) => {
    const result = await order_model_1.Order.create(orderData);
    return result;
};
const getAllOrdersIntoDB = async () => {
    const result = await order_model_1.Order.find();
    return result;
};
const searchOrderIntoDB = async (email) => {
    if (email) {
        const result = await order_model_1.Order.find({ email: email });
        return result;
    }
    else {
        const result = await order_model_1.Order.find({});
        return result;
    }
};
exports.OrderServices = {
    createOrderIntoDB,
    getAllOrdersIntoDB,
    searchOrderIntoDB
};
