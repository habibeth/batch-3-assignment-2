import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (productData: TProduct) => {
    const result = await Product.create(productData);
    return result;
}

const getAllProductsIntoDB = async () => {
    const result = await Product.find();
    return result;
}

const getSingleProductIntoDB = async (id: string) => {
    const result = await Product.findOne({ _id: id });
    return result;
}

const putSingleProductIntoDB = async (id: string, updatedDoc: object) => {
    const filter = { _id: id }
    const result = await Product.updateOne(filter, updatedDoc);
    return result;
}

const deleteSingleProductIntoDB = async (id: string) => {
    const result = await Product.deleteOne({ _id: id });
    return result;
}

// const searchProductsIntoDB = async (searchTerm: string) => {
//     const data = await Product.find({});
//     const result = data.filter(singleData => {
//         const dataName = (singleData.name).toLowerCase()
//         searchTerm = searchTerm.toLowerCase();
//         return dataName.includes(searchTerm)
//     })
//     return result;

// }

export const ProductServices = {
    createProductIntoDB,
    getAllProductsIntoDB,
    getSingleProductIntoDB,
    putSingleProductIntoDB,
    deleteSingleProductIntoDB,
    // searchProductsIntoDB
} 