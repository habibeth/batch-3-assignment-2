import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";


const orderSchema = new Schema<TOrder>({
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

})

export const Order = model<TOrder>("Order", orderSchema)