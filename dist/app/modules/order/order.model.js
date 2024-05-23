"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, "Email is Required"]
    },
    productId: {
        type: String,
        required: [true, "Product ID is Required"]
    },
    price: {
        type: Number,
        required: [true, "Price is Required"]
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is Required"]
    },
});
exports.Order = (0, mongoose_1.model)("Order", orderSchema);
