"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const orderValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    productId: zod_1.z.string(),
    price: zod_1.z.number().min(0, "Price must be greater than 0"),
    quantity: zod_1.z.number().int().positive("Quantity must be a positive integer").min(1, "Quantity must be at least 1"),
});
exports.default = orderValidationSchema;
