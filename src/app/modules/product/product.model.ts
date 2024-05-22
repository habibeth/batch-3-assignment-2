import { Schema, model } from "mongoose";
import { TProduct, TProductInventory, TProductVariant } from "./product.interface";

const productVariantSchema = new Schema<TProductVariant>({
    type: {
        type: String,
        required: [true, "The type of variant (e.g., size, color)."]
    },
    value: {
        type: String,
        required: [true, "The specific value of the variant (e.g., 'Small', 'Red')."]
    }
})

const productInventorySchema = new Schema<TProductInventory>({
    quantity: {
        type: Number,
        required: [true, "The available quantity of the product in stock."]
    },
    inStock: {
        type: Boolean,
        required: [true, "Indicates whether the product is currently in stock."]
    }
})

const productSchema = new Schema<TProduct>({
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
})

export const Product = model<TProduct>("Product", productSchema)