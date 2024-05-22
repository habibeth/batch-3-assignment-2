import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderIntoDB = async (orderData: TOrder) => {
    const result = await Order.create(orderData);
    return result;
}

const getAllOrdersIntoDB = async () => {
    const result = await Order.find();
    return result;
}

// const getEmailWiseOrderIntoDB = async (email: string) => {
//     const result = await Order.findOne({ email: email });
//     return result;
// }


export const OrderServices = {
    createOrderIntoDB,
    getAllOrdersIntoDB,
    // getEmailWiseOrderIntoDB
}