import * as ActionType from './action-types';
import { PromotionApi } from '../services/promotionapi';

export const listPromotions = () => {
    return async (dispatch) => {
        dispatch(request());
        await PromotionApi.list().then(promotion => {
            dispatch(success(promotion.data))
        }).catch(err => {
            console.log("HERE")
            console.log(err);
        })
    }

    function success(promotion) { return { type: ActionType.PROMOTION_LIST_SUCCESS, promotion } }
    function request() { return { type: ActionType.PROMOTION_LIST_REQUEST } }
}

// ACTIONS PROTECTED BY TOKEN
export const createPost = (name, slug, category, description, site, price) => {
    return async (dispatch) => {
        dispatch(request());
        await PromotionApi.create(name, slug, category, description, site, price).then(promotion => {
            dispatch(success())
        }).catch(err => {
            console.log(err);
        })
    }

    function success() { return { type: ActionType.PROMOTION_CREATE_REQUEST } }
    function request() { return { type: ActionType.PROMOTION_CREATE_SUCCESS } }
}

export const listMyPromotions = () => {
    return async (dispatch) => {
        dispatch(request());
        const access_token = localStorage.getItem('access_token')
        console.log(access_token)
        await PromotionApi.myPromotionsList(access_token).then(promotion => {
            console.log(promotion)
            dispatch(success(promotion.data))
        }).catch(err => {
            console.log(err);
        })
    }

    function success(promotion) { return { type: ActionType.OWN_PROMOTION_LIST_SUCCESS, promotion } }
    function request() { return { type: ActionType.OWN_PROMOTION_LIST_REQUEST } }
}

export const listCategories = () => {
    return async (dispatch) => {
        await PromotionApi.listCategories().then(categories => {
            dispatch(success(categories.data))
        }).catch(err => {
            console.log(err);
        })
    }

    function success(categories) { return { type: ActionType.CATEGORIES_LIST_SUCCESS, categories } }
}