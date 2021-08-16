import { combineReducers } from 'redux';

import promotions from './promotions';
import user from './user';

export default combineReducers({
    promotions,
    user
})