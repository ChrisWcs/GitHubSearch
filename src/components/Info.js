import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ login, repos, followers }) => (
    <div>
        <h1>{login}</h1>
        <h1>{repos}</h1>
        <h1>{followers}</h1>
    </div>
);

Info.propTypes = {
    login: PropTypes.string,
    repos: PropTypes.string,
    followers: PropTypes.string,
};

export default Info;