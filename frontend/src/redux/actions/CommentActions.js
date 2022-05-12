import {CREATE_NEW_COMMENT, DELETE_COMMENT, GET_ALL_COMMENTS} from "./types";


export const getAllCommentsAction = (data) => (dispatch) => {
    dispatch({
        type: GET_ALL_COMMENTS,
        payload: data,
    });
};

export const createNewCommentAction = (data) => (dispatch) => {
    dispatch({
        type: CREATE_NEW_COMMENT,
        payload: data,
    });
};

export const deleteCommentAction = (data) => (dispatch) => {
    dispatch({
        type: DELETE_COMMENT,
        payload: data,
    });
};
