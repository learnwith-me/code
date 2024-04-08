import { FETCH_FAILURE_DATA, FETCH_SUCCESS_DATA } from "../Action/ActionProduct"

export const initialState = {
    loading: true,
    error: '',
    data: null,
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SUCCESS_DATA:
            return {
                loading: false,
                error: '',
                data: action.payload,
            }
        case FETCH_FAILURE_DATA:
            return {
                loading: false,
                error: action.payload,
                data: null,
            }
        default:
            return state;
    }
}

export default ProductReducer;