import axios from "axios";
import {
    ADD_TO_CART,
    FAILURE,
    GET_SINGLEUSERS_SUCCESS,
    GET_USERS_SUCCESS,
    REQUEST,
    USER_LOGIN_SUCCESS
} from "./actionTypes";

export const request = () => {
    return {type: REQUEST}
}

export const failure = () => {
    return {type: FAILURE}
}
export const login_success = (payload) => {
    return {type: USER_LOGIN_SUCCESS, payload}
}

export const cart_add = (payload) =>{
    return {type:ADD_TO_CART,payload}
}