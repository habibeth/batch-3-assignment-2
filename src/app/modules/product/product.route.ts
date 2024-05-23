import express from 'express'
import { ProductControllers } from './product.controller'


const router = express.Router()


router.get("/products", ProductControllers.searchProducts);
router.post("/products", ProductControllers.createProduct);
router.get("/products", ProductControllers.getProducts);
router.get("/products/:productId", ProductControllers.getSingleProduct);
router.put("/products/:productId", ProductControllers.putSingleProduct);
router.delete("/products/:productId", ProductControllers.deleteSingleProduct);

export const ProductRoutes = router;