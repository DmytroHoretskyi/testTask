import product from "../orm/models/product.mjs";
import comment from "../orm/models/comment.mjs";


export async function getAllProducts(){
   return await product.findAll({
       include: {
           model: comment,
           as: "Comments",
       }
   });
}
export async function createProduct({name, imageUrl, count, width, height, weight}){
    return await product.create({name, imageUrl, count, width, height, weight})
}
export async function updateProduct(id,{name, imageUrl, count, width, height, weight}){
    await product.update({name, imageUrl, count, width, height, weight}, {where: {id}})
    return product.findOne({where: {id}})
}

export async function deleteProduct(id){
    await product.destroy({where: {id}});
}
