import * as ActionTypes from '../actions/action-types'

const INITIAL_STATE = {
    loading: false,
    logged: false,
    messageError: '',
}

export default function user(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
            case ActionTypes.LOGIN_SUCCESS:
                return {
                    loading: false,
                    loading: true,
                    logged: true,
                    messageError: ''
                }
            case ActionTypes.LOGOUT_SUCCESS:
                return {
                    ...INITIAL_STATE
                }
            case ActionTypes.LOGIN_ERROR:
                return {
                    ...INITIAL_STATE,
                    messageError: 'Login ou senha inválidos.'
                }
        default:
            return state;
    }
}
