import express from 'express'
import { OrderController } from './order.controller';

const router = express.Router()


router.get("/orders", OrderController.searchOrders);
router.post("/orders", OrderController.createOrders);
router.get("/orders", OrderController.getAllOrders);


export const OrderRoutes = router