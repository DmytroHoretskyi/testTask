import axios from "./http-common";
import {
    createNewProductAction,
    deleteProductAction,
    getAllProductsAction,
    SortProductByCountAction,
    SortProductByNameAction,
    updateProductAction
} from "../actions/productActions";

const getAllProducts = async (dispatch) => {
    const response = await axios.get("/products");
    dispatch(getAllProductsAction(response.data));
};
const sortProductsByName = (dispatch, {products}) => {
    dispatch(SortProductByNameAction(products))
}

const sortProductsByCount = (dispatch, {products}) => {
    dispatch(SortProductByCountAction(products))
}

const createNewProduct = async (dispatch, {name, count, imageUrl, weight, width, height}) => {
    const response = await axios.post("/product", {name, count, imageUrl, weight, width, height});
    dispatch(createNewProductAction(response.data));
};

const deleteProduct = async (dispatch, {id}) => {
    await axios.delete(`/product/${id}`);
    const response = await axios.get("/products");
    dispatch(deleteProductAction(response.data));
}

const updateProduct = async (dispatch, {id, name, count, imageUrl, weight, width, height}) => {
    const response = await axios.put(`/product/${id}`, {name, count, imageUrl, weight, width, height});
    dispatch(updateProductAction(response.data));
};

const productsApiService = {
    getAllProducts,
    createNewProduct,
    deleteProduct,
    updateProduct,
    sortProductsByName,
    sortProductsByCount,
}
export default productsApiService;
