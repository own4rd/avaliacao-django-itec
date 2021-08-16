import * as ActionType from './action-types';
import { UserApi } from '../services/userapi';
import axiosInstance from '../../store/services/axios';

// ACTIONS PROTECTED BY TOKEN
export const login = (email, password, history) => {
    return async (dispatch) => {
        console.log(email, password)
        dispatch(request());
        await UserApi.login(email, password).then(res => {
            localStorage.setItem('access_token', res.data.access);
            localStorage.setItem('refresh_token', res.data.refresh);
            axiosInstance.defaults.headers['Authorization'] =
                'JWT ' + localStorage.getItem('access_token');
            dispatch(success())
        }).catch(err => {
            dispatch(error())
            console.log(err);
        })
    }

    function success() { return { type: ActionType.LOGIN_SUCCESS } }
    function request() { return { type: ActionType.LOGIN_REQUEST } }
    function error() { return { type: ActionType.LOGIN_ERROR } }
}

export const logout = () => {
    return async (dispatch) => {
        const refresh_token = localStorage.getItem('refresh_token')
        console.log(refresh_token)
        await UserApi.logout(refresh_token).then(res => {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            axiosInstance.defaults.headers['Authorization'] = null;
            dispatch(success())
        }).catch(err => {
            console.log(err);
        })
    }

    function success() { return { type: ActionType.LOGOUT_SUCCESS } }
}