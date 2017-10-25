import { SET_INFO, FIELD_CHANGE } from './actions';

export const createFieldChange = (event) => ({
    type: FIELD_CHANGE,
    value: event.target.value
});

export const createSearchAsync = () => (dispatch, getState) => {
    fetch(`https://api.github.com/users/${getState().field}`).then( () => {

    });
};

export const createSetInfo = (login, repos, followers) => ({
    type: SET_INFO,
    login,
    repos,
    followers,
});

