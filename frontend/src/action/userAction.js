import axios from 'axios';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAILURE,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    CLEAR_ERRORS
} from '../constants/userConstants'

//LOGIN
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN_REQUEST,
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/backend/login', { email, password }, config)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: LOGIN_FAILURE,
            payload: error.response.data.message
        })
    }
}

//REGISTER
export const register = (userData) => async (dispatch) => {
    try {
        dispatch({
            type: REGISTER_USER_REQUEST,
        })

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }

        const { data } = await axios.post('/backend/register', userData, config)

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAILURE,
            payload: error.response.data.message
        })
    }
}

//LOAD USER
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: LOAD_USER_REQUEST,
        })

        const { data } = await axios.get('/backend/profile')

        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: LOAD_USER_FAILURE,
            payload: error.response.data.message
        })
    }
}

export const logoutUser = () => async (dispatch) => {
    try {
        await axios.get('/backend/logout')
        dispatch({
            type: LOGOUT_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type: LOGOUT_FAILURE,
            payload: error.response.data.message
        })
    }
}

//clear errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}