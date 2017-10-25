import { SET_INFO, FIELD_CHANGE } from './actions';

export const createFieldChange = (value) => ({
    type: FIELD_CHANGE,
    value,
});

export const createSetInfo = (login, repos, followers) => ({
    type: SET_INFO,
    login,
    repos,
    followers,
});


export const createSearchAsync = () => (dispatch, getState) => {
    fetch(`https://api.github.com/users/${getState().field}`).then( (response) => response.json())
                                                             .then((json) => {
        console.log(json);
        dispatch(createSetInfo(json.name, json.public_repos, json.followers));
    });
};