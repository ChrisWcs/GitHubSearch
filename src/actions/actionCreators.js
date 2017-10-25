import { SET_INFO, FIELD_CHANGE } from './actions';

export const createFieldChange = (value) => ({
    type: FIELD_CHANGE,
    value,
});

export const createSetInfo = (login, repos, followers, image) => ({
    type: SET_INFO,
    login,
    repos,
    followers,
    image,
});


export const createSearchAsync = () => (dispatch, getState) => {
    fetch(`https://api.github.com/users/${getState().field}`).then( (response) => response.json())
                                                             .then((json) => {
        dispatch(createSetInfo(json.name, json.public_repos, json.followers, json.avatar_url));
    });
};