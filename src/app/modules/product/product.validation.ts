import { z } from "zod";


const productVariantValidationSchema = z.object({
    type: z.string(),
    value: z.string()
});


const productInventoryValidationSchema = z.object({
    quantity: z.number().int().min(0, "The available quantity of the product in stock must be a non-negative integer."),
    inStock: z.boolean()
});


const productValidationSchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number().positive("The price of the product must be a positive number."),
    category: z.string(),
    tags: z.array(z.string()),
    variants: z.array(productVariantValidationSchema),
    inventory: productInventoryValidationSchema
});


export default productValidationSchema;