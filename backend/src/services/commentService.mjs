import comment from "../orm/models/comment.mjs";

export async function getCommentByProductId(productId){
    return await comment.findAll({where: {ProductId: productId}});
}

export async function createComment({description, productId}){
    return await comment.create({description, ProductId: productId})
}
export async function updateComment(id,{description}){
    await comment.update({description}, {where: {id}})
}

export async function deleteComment(id){
    await comment.destroy({where: {id}});
}
