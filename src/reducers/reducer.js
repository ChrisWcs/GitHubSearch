import { SET_INFO, FIELD_CHANGE } from '../actions/actions';
import initialState from './initialState';

const reducer = (state = initialState(), action) => {
    switch(action.type){
        case SET_INFO:
            return {
                ...state,
                login: action.login,
                repos: action.repos,
                followers: action.followers,
                image: action.image
            };
        case FIELD_CHANGE:
            return {
                ...state,
                field: action.value
            };
        default:
            return state;
    }
};

export default reducer;