import * as ActionTypes from '../actions/action-types'

const INITIAL_STATE = {
    loading: false,
    data: Array(),
    categories: Array(),
    ownPromotions: Array()
}

export default function promotions(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ActionTypes.PROMOTION_LIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.PROMOTION_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.promotion
            }
        case ActionTypes.OWN_PROMOTION_LIST_SUCCESS:
            return {
                ...state,
                ownPromotions: action.promotion
            }
        case ActionTypes.CATEGORIES_LIST_SUCCESS:
            return {
                ...state,
                categories: action.categories
            }
        default:
            return INITIAL_STATE;
    }
}
