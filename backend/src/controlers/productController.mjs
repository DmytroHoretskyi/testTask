import {Router} from "express";
import {
    createProduct,
    deleteProduct,
    getAllProducts,
    updateProduct
} from "../services/productService.mjs";

const router = Router();

router.get("/products", async (req, res, next) => {
    try {
        const result = await getAllProducts();
       return res.json(result);
    }catch (err){
        next(err);
    }
})

router.post("/product", async (req, res, next) =>{
    try {
        const {name, imageUrl, count, width, height, weight} = req.body;
       const product =  await createProduct({name, imageUrl, count, width, height, weight});
       return  res.status(201).json(product);
    }catch (err){
        next(err);
    }
})

router.put("/product/:id", async (req, res, next) =>{
    try {
        const {id} = req.params;
        const {name, imageUrl, count, width, height, weight} = req.body;
        const product = await updateProduct(id, {name, imageUrl, count, width, height, weight});
        res.status(200).json(product);
    }catch (err){
        next(err);
    }
})

router.delete('/product/:id', async (req, res, next) => {
    try{
        const {id} = req.params;
        await deleteProduct(id);
       return res.sendStatus(201);
    }catch (err){
        next(err);
    }
})

export default router;
