"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
const product_model_1 = require("./product.model");
const createProductIntoDB = async (productData) => {
    const result = await product_model_1.Product.create(productData);
    return result;
};
const getAllProductsIntoDB = async () => {
    const result = await product_model_1.Product.find();
    return result;
};
const getSingleProductIntoDB = async (id) => {
    const result = await product_model_1.Product.findOne({ _id: id });
    return result;
};
const putSingleProductIntoDB = async (id, updatedDoc) => {
    const filter = { _id: id };
    const result = await product_model_1.Product.updateOne(filter, updatedDoc);
    return result;
};
const deleteSingleProductIntoDB = async (id) => {
    const result = await product_model_1.Product.deleteOne({ _id: id });
    return result;
};
// const searchProductsIntoDB = async (searchTerm: string) => {
//     const data = await Product.find({});
//     const result = data.filter(singleData => {
//         const dataName = (singleData.name).toLowerCase()
//         searchTerm = searchTerm.toLowerCase();
//         return dataName.includes(searchTerm)
//     })
//     return result;
// }
exports.ProductServices = {
    createProductIntoDB,
    getAllProductsIntoDB,
    getSingleProductIntoDB,
    putSingleProductIntoDB,
    deleteSingleProductIntoDB,
    // searchProductsIntoDB
};
