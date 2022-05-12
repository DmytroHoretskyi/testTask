import {Router} from "express";
import {createComment, deleteComment, getCommentByProductId, updateComment} from "../services/commentService.mjs";

const router = Router();

router.get("/comments/:productId", async (req, res, next) => {
    try {
        const {productId} = req.params;
        const result = await getCommentByProductId(productId);
       return res.json(result);
    }catch (err){
        next(err);
    }
})

router.post("/comment", async (req, res, next) =>{
    try {
        const {description, productId} = req.body;
        const result = await createComment({description, productId})
        return  res.status(201).json(result);
    }catch (err){
        next(err);
    }
})

router.put("/comment/:id", async (req, res, next) =>{
    try {
        const {id} = req.params;
        const {description} = req.body;
        await updateComment(id, {description});
        res.sendStatus(200);
    }catch (err){
        next(err);
    }
})

router.delete('/comment/:id', async (req, res, next) => {
    try{
        const {id} = req.params;
        await deleteComment(id);
        return res.sendStatus(201);
    }catch (err){
        next(err);
    }
})

export default router;
