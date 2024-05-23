"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productVariantSchema = new mongoose_1.Schema({
    type: {
        type: String,
        required: [true, "The type of variant (e.g., size, color)."]
    },
    value: {
        type: String,
        required: [true, "The specific value of the variant (e.g., 'Small', 'Red')."]
    }
});
const productInventorySchema = new mongoose_1.Schema({
    quantity: {
        type: Number,
        required: [true, "The available quantity of the product in stock."]
    },
    inStock: {
        type: Boolean,
        required: [true, "Indicates whether the product is currently in stock."]
    }
});
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "The name of the product."]
    },
    description: {
        type: String,
        required: [true, "A brief description of the product."]
    },
    price: {
        type: Number,
        required: [true, "The price of the product."]
    },
    category: {
        type: String,
        required: [true, "The category to which the product belongs."]
    },
    tags: {
        type: [String],
        required: [true, "An array of tags or keywords associated with the product."]
    },
    variants: {
        type: [productVariantSchema],
        required: [true, "An array containing different variants or options of the product, such as size, color, or style"]
    },
    inventory: {
        type: productInventorySchema,
        required: [true, "An object representing the product's inventory details."]
    }
});
exports.Product = (0, mongoose_1.model)("Product", productSchema);
