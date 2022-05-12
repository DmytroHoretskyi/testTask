import axios from "./http-common";
import {createNewCommentAction, deleteCommentAction, getAllCommentsAction} from "../actions/CommentActions";

const getComments = async (dispatch, {productId}) => {
    const response = await axios.get(`/comments/${productId}`);
    dispatch(getAllCommentsAction(response.data));
};

const createNewComment = async (dispatch, {description, productId}) => {
    const response = await axios.post("/comment", {description, productId});
    dispatch(createNewCommentAction(response.data));
};

const deleteComment = async (dispatch, {id, productId}) => {
    await axios.delete(`/comment/${id}`);
    const products = await axios.get("/products");
    const comments = await axios.get(`/comments/${productId}`);
    dispatch(deleteCommentAction([products.data, comments.data]));
}

const commentsApiService = {
    getComments,
    createNewComment,
    deleteComment,
}
export default commentsApiService;
