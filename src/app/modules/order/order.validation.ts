import { z } from "zod";


const orderValidationSchema = z.object({
    email: z.string().email(),
    productId: z.string(),
    price: z.number().min(0, "Price must be greater than 0"),
    quantity: z.number().int().positive("Quantity must be a positive integer").min(1, "Quantity must be at least 1"),
});

export default orderValidationSchema;