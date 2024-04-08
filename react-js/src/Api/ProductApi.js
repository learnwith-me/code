import { FETCH_FAILURE_DATA, FETCH_SUCCESS_DATA } from "../Action/ActionProduct";

export const ProductApi = () => async dispatch => {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const productData = await response.json();
        dispatch({ type: FETCH_SUCCESS_DATA, payload: productData })
    } catch (error) {
        dispatch({ type: FETCH_FAILURE_DATA, error: error.message })

    }
}