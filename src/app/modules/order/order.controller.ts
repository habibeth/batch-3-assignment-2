import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import orderValidationSchema from "./order.validation";


const createOrders = async (req: Request, res: Response) => {

    try {
        const order = req.body;
        const zodParsedData = orderValidationSchema.parse(order);

        const result = await OrderServices.createOrderIntoDB(zodParsedData);
        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went to wrong!",
            data: error
        })
    }
}

const getAllOrders = async (req: Request, res: Response) => {
    try {
        const result = await OrderServices.getAllOrdersIntoDB()
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully!",
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went to wrong!",
            data: error
        })
    }
}

// const getEmailWiseAllOrders = async (req: Request, res: Response) => {
//     try {
//         const { email } = req.query;
//         const result = await OrderServices.getEmailWiseOrderIntoDB(email as string)
//         res.status(200).json({
//             success: true,
//             message: "Orders fetched successfully for user email!",
//             data: result
//         })
//     } catch (error: any) {
//         res.status(500).json({
//             success: false,
//             message: error.message || "Something went to wrong!",
//             data: error
//         })
//     }
// }


export const OrderController = {
    createOrders,
    getAllOrders,
    // getEmailWiseAllOrders
}