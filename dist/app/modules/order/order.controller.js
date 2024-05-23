"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const order_service_1 = require("./order.service");
const order_validation_1 = __importDefault(require("./order.validation"));
const createOrders = async (req, res) => {
    try {
        const order = req.body;
        const zodParsedData = order_validation_1.default.parse(order);
        const result = await order_service_1.OrderServices.createOrderIntoDB(zodParsedData);
        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went to wrong!",
            data: error
        });
    }
};
const getAllOrders = async (req, res) => {
    try {
        const result = await order_service_1.OrderServices.getAllOrdersIntoDB();
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully!",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went to wrong!",
            data: error
        });
    }
};
const searchOrders = async (req, res) => {
    try {
        const { email } = req.query;
        const filter = await order_service_1.OrderServices.searchOrderIntoDB(email);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: filter,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went to wrong!",
            data: error
        });
    }
};
exports.OrderController = {
    createOrders,
    getAllOrders,
    searchOrders
};
