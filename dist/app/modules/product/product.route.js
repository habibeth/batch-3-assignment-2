"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.get("/products", product_controller_1.ProductControllers.searchProducts);
router.post("/products", product_controller_1.ProductControllers.createProduct);
router.get("/products", product_controller_1.ProductControllers.getProducts);
router.get("/products/:productId", product_controller_1.ProductControllers.getSingleProduct);
router.put("/products/:productId", product_controller_1.ProductControllers.putSingleProduct);
router.delete("/products/:productId", product_controller_1.ProductControllers.deleteSingleProduct);
exports.ProductRoutes = router;
