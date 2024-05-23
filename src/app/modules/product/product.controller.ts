import { Request, Response } from "express";
import productValidationSchema from "./product.validation";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
    try {
        const product = req.body;
        const zodParsedData = productValidationSchema.parse(product);

        const result = await ProductServices.createProductIntoDB(zodParsedData);
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
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

const getProducts = async (req: Request, res: Response) => {
    try {
        const result = await ProductServices.getAllProductsIntoDB()
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
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

const getSingleProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await ProductServices.getSingleProductIntoDB(productId);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went to wrong!",
            data: error
        })
    }
}

const putSingleProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const { product: productData } = req.body;
        const result = await ProductServices.putSingleProductIntoDB(productId as string, productData);

        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went to wrong!",
            data: error
        })
    }
}

const deleteSingleProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await ProductServices.deleteSingleProductIntoDB(productId);

        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: result,
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went to wrong!",
            data: error
        })
    }
}
const searchProducts = async (req: Request, res: Response) => {
    try {
        const { searchTerm } = req.query;
        const filter = await ProductServices.searchProductsIntoDB(searchTerm as string);

        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: filter,
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went to wrong!",
            data: error
        })
    }
}


export const ProductControllers = {
    createProduct,
    getProducts,
    getSingleProduct,
    putSingleProduct,
    deleteSingleProduct,
    searchProducts
}