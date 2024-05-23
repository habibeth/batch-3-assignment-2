"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControllers = void 0;
const product_validation_1 = __importDefault(require("./product.validation"));
const product_service_1 = require("./product.service");
const createProduct = async (req, res) => {
    try {
        const product = req.body;
        const zodParsedData = product_validation_1.default.parse(product);
        const result = await product_service_1.ProductServices.createProductIntoDB(zodParsedData);
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went to wrong!",
            data: error
        });
    }
};
const getProducts = async (req, res) => {
    try {
        const result = await product_service_1.ProductServices.getAllProductsIntoDB();
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went to wrong!",
            data: error
        });
    }
};
const getSingleProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const result = await product_service_1.ProductServices.getSingleProductIntoDB(productId);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went to wrong!",
            data: error
        });
    }
};
const putSingleProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const { product: productData } = req.body;
        const result = await product_service_1.ProductServices.putSingleProductIntoDB(productId, productData);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went to wrong!",
            data: error
        });
    }
};
const deleteSingleProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const result = await product_service_1.ProductServices.deleteSingleProductIntoDB(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went to wrong!",
            data: error
        });
    }
};
// const searchProducts = async (req: Request, res: Response) => {
//     try {
//         const { searchTerm } = req.query;
//         const filter = await ProductServices.searchProductsIntoDB(searchTerm as string);
//         res.status(200).json({
//             success: true,
//             message: "Product deleted successfully!",
//             data: filter,
//         })
//     } catch (error: any) {
//         res.status(500).json({
//             success: false,
//             message: error.message || "Something went to wrong!",
//             data: error
//         })
//     }
// }
exports.ProductControllers = {
    createProduct,
    getProducts,
    getSingleProduct,
    putSingleProduct,
    deleteSingleProduct,
    // searchProducts
};
