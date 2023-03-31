import {
    REQUEST,
    FAILURE,
    GET_PRODUCT_SUCCESS,
    GET_USERS_SUCCESS,
    GET_ORDER_LIST
} from "./actionTypes";

const initalState = {
    isLoading: false,
    isError: false,
    Products: [],
    Users: [],
    Order: []
}

export const reducer = (state = initalState, {type, payload}) => {
    switch (type) {

        default:
            return state
    }

}
