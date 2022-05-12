import {
    CREATE_NEW_PRODUCT,
    DELETE_PRODUCT,
    GET_ALL_PRODUCTS,
    SORT_BY_COUNT,
    SORT_BY_NAME,
    UPDATE_PRODUCT
} from "./types";

export const getAllProductsAction = (data) => (dispatch) => {
    dispatch({
        type: GET_ALL_PRODUCTS,
        payload: data,
    });
};

export const SortProductByNameAction = (data) => (dispatch) => {
    dispatch({
        type: SORT_BY_NAME,
        payload: data,
    });
};

export const SortProductByCountAction = (data) => (dispatch) => {
    dispatch({
        type: SORT_BY_COUNT,
        payload: data,
    });
};

export const createNewProductAction = (data) => (dispatch) => {
    dispatch({
        type: CREATE_NEW_PRODUCT,
        payload: data,
    });
};
export const deleteProductAction = (data) => (dispatch) => {
    dispatch({
        type: DELETE_PRODUCT,
        payload: data,
    });
}
export const updateProductAction = (data) => (dispatch) => {
    dispatch({
        type: UPDATE_PRODUCT,
        payload: data,
    });
};
