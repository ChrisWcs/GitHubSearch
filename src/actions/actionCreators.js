import { SET_INFO, FIELD_CHANGE } from './actions';

export const createFieldChange = (value) => ({
    type: FIELD_CHANGE,
    value,
});

export const createSearchAsync = () => (dispatch, getState) => {
    fetch(`https://api.github.com/users/${getState().field}`).then( (response) => {
        console.log(response.json());
    });
};

export const createSetInfo = (login, repos, followers) => ({
    type: SET_INFO,
    login,
    repos,
    followers,
});

