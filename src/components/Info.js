import React from 'react';
import PropTypes from 'prop-types';

const style = {
    col: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    name: {
        fontFamily: "Arial",
        letterSpacing: "2px",
        fontSize: "30px",
    },
    image: {
        marginTop: "10px",
        height: "300px",
        width: "auto",
    },
    numbers: {
        fontFamily: "Arial",
        letterSpacing: "1px",
        fontSize: "25px",
    }
};

const Info = ({ login, repos, followers, image }) => (
    <div style={style.col}>
        <img style={style.image} src={image} />
        <h1 style={style.name} >Name: {login}</h1>
        <h1 style={style.numbers} >Number of Public Repos: {repos}</h1>
        <h1 style={style.numbers} >Number of Followers: {followers}</h1>
    </div>
);

Info.propTypes = {
    login: PropTypes.string,
    repos: PropTypes.number,
    followers: PropTypes.number,
    image: PropTypes.string,
};

export default Info;