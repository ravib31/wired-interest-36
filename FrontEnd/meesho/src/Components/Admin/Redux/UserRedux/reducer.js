import {
    REQUEST,
    FAILURE,
    USER_LOGIN_SUCCESS,
    GET_PRODUCT_SUCCESS,
    ADD_TO_CART
} from "./actionTypes";

const initalState = {
    isLoading: false,
    isError: false,
    Products: [],
    Users: [],
    Cart: [],
    token: "",
    isAuth: false
}

export const reducer = (state = initalState, {type, payload}) => {
    switch (type) {
        case REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                Users: payload.user,
                isAuth: true,
                token: payload.token
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                Products: payload
            }
        case ADD_TO_CART:
            return {
                ...state,
                Cart:[...state.Cart,payload] 
            }
        default:
            return state
    }
}
