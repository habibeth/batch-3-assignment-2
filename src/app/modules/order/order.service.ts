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

const searchOrderIntoDB = async (email: string) => {
    if (email) {
        const result = await Order.find({ email: email });
        return result;
    }
    else {
        const result = await Order.find({});
        return result;
    }
}


export const OrderServices = {
    createOrderIntoDB,
    getAllOrdersIntoDB,
    searchOrderIntoDB
}