import {
    REQUEST,
    FAILURE,
    GET_PRODUCT_SUCCESS,
    GET_USERS_SUCCESS,
    GET_ORDER_LIST,
    GET_SINGLEUSERS_SUCCESS
} from "./actionTypes";

const initalState = {
    isLoading: false,
    isError: false,
    Products: [],
    Users: [],
    Order: [],
    SingleUser:[],
    SingleUserOrder : []
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
        case GET_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                Users: payload
            }
        case GET_ORDER_LIST:
            return {
                ...state,
                isLoading: false,
                Order: payload
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                Products: payload
            }
            case GET_SINGLEUSERS_SUCCESS:{
                // console.log("payload",payload)
                return {...state,
                isLoading:false,
                SingleUser:payload,
                SingleUserOrder:payload.order.OrderedItems
            }
            }
        default:
            return state
    }

}
