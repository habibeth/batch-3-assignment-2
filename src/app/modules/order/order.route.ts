import express from 'express'
import { OrderController } from './order.controller';

const router = express.Router()


router.post("/orders", OrderController.createOrders);
router.get("/orders", OrderController.getAllOrders);
// router.get("/orders", OrderController.getEmailWiseAllOrders);


export const OrderRoutes = router