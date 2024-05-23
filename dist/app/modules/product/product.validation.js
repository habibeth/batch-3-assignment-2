"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const productVariantValidationSchema = zod_1.z.object({
    type: zod_1.z.string(),
    value: zod_1.z.string()
});
const productInventoryValidationSchema = zod_1.z.object({
    quantity: zod_1.z.number().int().min(0, "The available quantity of the product in stock must be a non-negative integer."),
    inStock: zod_1.z.boolean()
});
const productValidationSchema = zod_1.z.object({
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    price: zod_1.z.number().positive("The price of the product must be a positive number."),
    category: zod_1.z.string(),
    tags: zod_1.z.array(zod_1.z.string()),
    variants: zod_1.z.array(productVariantValidationSchema),
    inventory: productInventoryValidationSchema
});
exports.default = productValidationSchema;
