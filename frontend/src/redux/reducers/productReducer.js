import {
    CREATE_NEW_COMMENT,
    CREATE_NEW_PRODUCT, DELETE_COMMENT,
    DELETE_PRODUCT, GET_ALL_COMMENTS,
    GET_ALL_PRODUCTS, SORT_BY_COUNT, SORT_BY_NAME,
    UPDATE_PRODUCT
} from "../actions/types";

const initialState = {
    products: [],
    comments: [],
};

function replace(arrayToInsert, itemToInsert) {
    const oldItem = arrayToInsert.find(
        (product) => product.id === itemToInsert.id
    );
    const oldItemIndex = arrayToInsert.indexOf(oldItem);

    return [
        ...arrayToInsert.slice(0, oldItemIndex),
        itemToInsert,
        ...arrayToInsert.slice(oldItemIndex + 1),
    ];
}

function productReducer(state = initialState, {type, payload} = {}) {
    if (type === GET_ALL_PRODUCTS) {
        return {products: payload};
    }
    if (type === SORT_BY_NAME) {
        const sortedProducts = [...payload].sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
        return {...state, products: sortedProducts}
    }
    if (type === SORT_BY_COUNT) {
        const sortedProducts = [...payload].sort((a, b) => b.count - a.count);
        return {...state, products: sortedProducts}
    }
    if (type === CREATE_NEW_PRODUCT) {
        return {...state, products: [...state.products, payload]}
    }
    if (type === DELETE_PRODUCT) {
        return {products: payload}
    }
    if (type === UPDATE_PRODUCT) {
        const updatedProducts = replace([...state.products], payload);
        return {
            ...state,
            products: updatedProducts,
        };
    }
    if (type === GET_ALL_COMMENTS) {
        return {
            ...state, comments: payload
        }
    }
    if (type === CREATE_NEW_COMMENT) {
        return {...state, comments: [...state.comments, payload]}
    }
    if (type === DELETE_COMMENT) {
        return {products: payload[0], comments: payload[1]}
    }
    return state;
}

export default productReducer;
